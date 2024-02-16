import Image from "next/image";
import Link
 from "next/link";
export default function Home() {
  return (
    
    <main className="text-center mt-20">
        <h1>Hello Next.JS</h1>
        <Link href='/about'>Go to About Page</Link>
    </main>
    
  );
}
