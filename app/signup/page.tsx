"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Signup(){
    const [loading, setLoading] = React.useState(false);
    const router = useRouter();
    const [isButtonDiabled, setIsButtonDisabled] = React.useState(true);
    const [user, setUser] = React.useState({
        username : "",
        email : "",
        password : ""
    });

    const handleSignup = async() => {
        console.log('button clicked')
        setLoading(true);
        if(user.username.length < 1 || user.email.length < 11 || user.password.length < 6){
            alert('username, email & password should be valid');
            setLoading(false);
            return;
        }
        
        try{
            await axios.post('/api/users/signup', user);
            console.log('axios request sent');
            router.push('/login');
        }catch(error){
            console.log("error occurred");
            console.log(error);
        }finally{
            setLoading(false);
        }

    }
    return <div className="text-center mt-20">
        <h1 className="text-2xl">Welcome to SignUp Page!</h1>
        <div><h3>{loading ? "processing..." : ""}</h3></div>
        <div className="flex flex-col justify-center items-center">
            <div className="m-3"><input placeholder="Enter username" onChange={(e) => setUser({...user, username : e.target.value})} className="block w-84 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"/></div>
            <div className="m-3"><input placeholder="email" onChange={(e) => setUser({...user, email : e.target.value})} className="block w-84 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"/></div>
            <div className="m-3"><input placeholder="password" onChange={(e) => setUser({...user, password : e.target.value})} className="block w-84 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"/></div>
            <button onClick={handleSignup} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Signup</button>
            <div className="mt-4"><h1 className="text-xl">Have an account?<button onClick={() => router.push('/login')} className="m-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Login</button></h1></div>
        </div>
    </div>
}