import { auth, db } from "@/lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { redirect } from "next/navigation";

export async function signUp(formData) {
  "use server";
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredential.user;
    await setDoc(doc(db, "users", user.uid), {
      email: user.email,
      userName: user.email.split("@")[0],
    });
    return redirect("/");
  } catch (error) {
    console.error("Sign-up error:", error);
  }
}
