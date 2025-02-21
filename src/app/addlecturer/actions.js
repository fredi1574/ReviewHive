import { db } from "@/lib/firebase";
import { addDoc } from "firebase/firestore";
import { redirect } from "next/navigation";
import { collection } from "firebase/firestore";

export async function addLecturer(formData) {
  "use server";

  const name = formData.get("name");
  const institute = formData.get("institute");
  const departments = formData.get("departments");
  const courses = formData.get("courses");

  const profilesCollection = collection(db, "profiles");
  const newProfile = {
    name,
    institute,
    departments,
    courses,
    averageRating: 0,
  };
  const docRef = await addDoc(profilesCollection, newProfile);

  return redirect(`/${docRef.id}`);
}
