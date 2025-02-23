import { db } from "@/lib/firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

export async function getProfiles(query, category = "name") {
  const profilesCollectionRef = collection(db, "profiles");
  const querySnapshot = await getDocs(profilesCollectionRef);
  const profiles = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (!query) {
    return profiles;
  }

  return profiles.filter((profile) => {
    const fieldValue = profile[category];
    if (!fieldValue) {
      return false;
    }
    return fieldValue.toLowerCase().includes(query.toLowerCase());
  });
}

export async function getProfileById(id) {
  const docRef = doc(db, "profiles", id);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? docSnap.data() : null;
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
