import { useEffect } from "react";
import { useRouter } from "next/router";
import { AuthProvider, AuthResponse, SignInPage } from "@toolpad/core";
import { auth, googleProvider, signInWithPopup } from "@/api/firebase";
import useUser from "@/hooks/useUser";

const providers = [{ id: "google", name: "Google" }];

function LoginPage() {
  const router = useRouter();
  const user: any = useUser();

  // 🔹 Redirect after component mounts
  useEffect(() => {
    if (user.user) {
      router.replace("/");
    }
  }, [user, router]);

  const signIn = async (provider: AuthProvider): Promise<AuthResponse> => {
    try {
      if (provider.id === "google") {
        const result = await signInWithPopup(auth, googleProvider);
        console.log("User signed in:", result.user);
        return { success: "Signed in successfully" };
      } else {
        return { error: `Unsupported provider: ${provider.id}`, type: "auth_error" };
      }
    } catch (error) {
      console.error("Login error:", error);
      return { error: "Authentication failed", type: "firebase_auth_error" };
    }
  };

  return <SignInPage providers={providers} signIn={signIn} />;
}

export default LoginPage;
