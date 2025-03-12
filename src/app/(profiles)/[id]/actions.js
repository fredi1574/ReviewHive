import { db } from "@/lib/firebase";
import {
  collection,
  doc,
  runTransaction,
  setDoc,
  Timestamp,
} from "firebase/firestore";
import { redirect } from "next/navigation";

export async function addReview(formData) {
  "use server";
  let userId = "";

  const profileId = formData.get("profileId");
  const rating = Number(formData.get("rating"));
  const body = formData.get("body");

  // Temporary fix for not having a user
  // const anonymous = formData.get("anonymous");
  let anonymous = true;

  const author = anonymous
    ? "Anonymous"
    : doc(db, "users", formData.get(userId));

  const reviewsRef = collection(db, "profiles", profileId, "reviews");
  const reviewDocRef = doc(reviewsRef);

  await setDoc(reviewDocRef, {
    rating: Number(rating),
    body,
    author: "Anonymous",
    timestamp: Timestamp.now(),
  });

  const profileDocRef = doc(db, "profiles", profileId);
  await runTransaction(db, async (transaction) => {
    const profileDoc = await transaction.get(profileDocRef);
    if (!profileDoc.exists()) {
      throw new Error("Profile not found");
    }

    const currentAverage = profileDoc.data().averageRating || 0;
    const currentCount = profileDoc.data().ratingCount || 0;

    const newCount = currentCount + 1;
    const newAverage = (currentAverage * currentCount + rating) / newCount;

    transaction.update(profileDocRef, {
      averageRating: newAverage,
      ratingCount: newCount,
    });
  });

  return redirect(`/${profileId}`);
}
