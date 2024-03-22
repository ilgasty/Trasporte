import { Navbar } from "@/components";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center p-24">
      <span className="text-lg">Hola Mundo</span>
      <Link href={'/about'}>About Page</Link>
      </main>

    </>
  );
}
