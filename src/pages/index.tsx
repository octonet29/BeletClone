import Image from "next/image";
import { Inter } from "next/font/google";
import LoginPage from "@/components/auth/login/login";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <LoginPage setEmail={undefined} setPassword={undefined} />
    </main>
  );
}
