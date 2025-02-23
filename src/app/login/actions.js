import { auth } from "firebase-admin";
import { signInWithEmailAndPassword } from "firebase/auth";
import { redirect } from "next/navigation";

export const signIn = async (event) => {
  event.preventDefault();

  const data = new FormData(event.currentTarget);
  const email = data.get("email");
  const password = data.get("password");

  signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
    const user = userCredential.user;

    return redirect("/");
  });
};
