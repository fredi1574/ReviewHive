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
  const userId = "";

  const profileId = formData.get("profileId");
  const rating = Number(formData.get("rating"));
  const body = formData.get("body");
  const anonymous = formData.get("anonymous");

  const author = anonymous
    ? "Anonymous"
    : doc(db, "users", formData.get(userId));

  const reviewsRef = collection(db, "profiles", profileId, "reviews");
  const reviewDocRef = doc(reviewsRef);

  await setDoc(reviewDocRef, {
    rating: Number(rating),
    body,
    author,
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
