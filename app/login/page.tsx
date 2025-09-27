
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getFirebaseAuth } from "@/lib/firebase";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { AlertCircle, Loader2 } from "lucide-react";

function Alert({ message }: { message: string }) {
  return (
    <div role="alert" className="flex items-center gap-3 rounded-lg border border-red-300 bg-red-50 p-4 text-sm text-red-800">
      <AlertCircle className="h-5 w-5" />
      <p>{message}</p>
    </div>
  );
}

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const sanitizedEmail = email.trim();
      const sanitizedPassword = password;

      if (!sanitizedEmail || !sanitizedPassword) {
        setError("Email dan password wajib diisi.");
        return;
      }

      const auth = getFirebaseAuth();
      if (!auth) {
        throw new Error("Konfigurasi Firebase Auth tidak ditemukan.");
      }

      const userCredential = await signInWithEmailAndPassword(
        auth,
        sanitizedEmail,
        sanitizedPassword
      );
      const user = userCredential.user;
      const idToken = await user.getIdToken();

      const response = await fetch("/api/auth/session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idToken }),
      });

      if (response.ok) {
        router.push("/admin");
      } else {
        const data = await response.json();
        setError(data.message || "Login gagal. Periksa kembali email dan password Anda.");
      }
    } catch (error: any) {
      if (error.code === "auth/invalid-credential" || error.code === "auth/user-not-found" || error.code === "auth/wrong-password") {
        setError("Email atau password salah.");
      } else {
        setError(error.message || "Terjadi kesalahan saat mencoba masuk.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-surface-alt">
      <div className="content-container flex min-h-screen items-center justify-center py-12">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">Admin Login</h1>
            <p className="mt-2 text-lg text-text-muted">
              Selamat datang kembali. Silakan masuk ke akun Anda.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6 rounded-xl border border-border bg-surface p-8 shadow-lg">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="contoh@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isSubmitting}
              />
            </div>

            {error && <Alert message={error} />}

            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? (
                <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Memproses...</>
              ) : (
                "Login"
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
