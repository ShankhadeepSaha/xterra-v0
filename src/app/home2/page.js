import Hero from "@/components/heroes/Hero1";
import Navbar from "@/components/navbars/Navbar1";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
      </main>
    </>
    );
}