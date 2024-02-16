"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Signup(){
    const [username, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const router = useRouter();

    function handleNameChange(e:any){
        setName(e.target.value);
    }

    function handleEmailChange(e:any){
        setEmail(e.target.value);
    }
    function handlePasswordChange(e:any){
        setPassword(e.target.value);
    }

    // function handleChanges(fn : (valu : String) => void, e : any){
    //     console.log(e.target.value);
    //     // fn(e.target.value);
    // }

    const handleSignup = async() => {
        console.log('button clicked')
        try{
            const user = {
                username,
                email,
                password
            }
            await axios.post('/api/users/signup', user);
            console.log('axios request sent');
            router.push('/login');
        }catch(error){
            console.log("error occurred");
            console.log(error);
        }

    }
    return <div className="text-center mt-20">
        <h1 className="text-2xl">Welcome to SignUp Page!</h1>
        <div className="flex flex-col justify-center items-center">
            <div className="m-3"><input placeholder="Enter username" onChange={handleNameChange} className="block w-84 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"/></div>
            <div className="m-3"><input placeholder="email" onChange={handleEmailChange} className="block w-84 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"/></div>
            <div className="m-3"><input placeholder="password" onChange={handlePasswordChange} className="block w-84 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"/></div>
            <button onClick={handleSignup} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Signup</button>
            <div className="mt-4"><h1 className="text-xl">Have an account?<button onClick={() => router.push('/login')} className="m-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Login</button></h1></div>
        </div>
    </div>
}