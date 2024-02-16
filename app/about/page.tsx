import Link from "next/link"

export default function About(){
    return <div className="text-center mt-20">
        <h1>this is about page</h1>
        <Link href='/'>Go to Home page</Link>
    </div >
}