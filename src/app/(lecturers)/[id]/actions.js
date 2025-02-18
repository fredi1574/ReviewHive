import { db } from "@/lib/firebase";
import { collection, doc, setDoc, Timestamp } from "firebase/firestore";
import { redirect } from "next/navigation";

export async function addReview(formData) {
  "use server";
  const userId = "userId";

  const profileId = formData.get("profileId");
  const rating = formData.get("rating");
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

  return redirect(`/${profileId}`);
}
