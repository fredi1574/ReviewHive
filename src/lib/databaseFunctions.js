import {
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

export async function getProfiles() {
  const profilesCollectionRef = collection(db, "profiles");
  const querySnapshot = await getDocs(profilesCollectionRef);
  const profiles = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return profiles;
}

export async function getProfileById(id) {
  const docRef = doc(db, "profiles", id);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? docSnap.data() : null;
}

export async function updateRating(profileId, newRating) {
  const docRef = doc(db, "profiles", profileId);
  await updateDoc(docRef, { rating: newRating });
}

export async function getReviewsByProfileId(profileId) {
  const reviewsCollectionRef = collection(db, "profiles", profileId, "reviews");
  const querySnapshot = await getDocs(reviewsCollectionRef);
  const reviews = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return reviews;
}
