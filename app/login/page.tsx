"use client"
import { useRouter } from "next/navigation"


export default function Login(){
    const router =useRouter();
    return <div className="text-center mt-20">
        <h1 className="text-3xl">Login Here</h1>
        <div className="flex justify-center items-center flex-col">
            <div className="m-3"><input placeholder="Enter your name" className="block w-84 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"/></div>
            <div className="m-3"><input placeholder="Enter your name" className="block w-84 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"/></div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Signup</button>
            <button onClick={() => router.push('/signup')}className="m-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Goto Singup</button>
        </div>
    </div>
}