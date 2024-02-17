"use client";
import { useRouter } from "next/navigation";
import React from "react";
import axios from "axios";


export default function Login(){
    const router =useRouter();
    const [loginData, setLoginData] = React.useState({
        email : "",
        password : ""
    });
    const [loginSuccess, setLoginSuccess] = React.useState(false);
    async function handleLogin(){
        console.log(`login button clicked`);
        const response = await axios.post('/api/users/login', loginData);
        setLoginSuccess(true);
        router.push('/profile');
        setLoginSuccess(false);
    }
    return <div className="text-center mt-20">
        <h1 className="text-3xl">Login Here</h1>
        <div>{loginSuccess ? <h2>login successful!</h2> : ""}</div>
        <div className="flex justify-center items-center flex-col">
            <div className="m-3"><input placeholder="Enter email" onChange={(e) => setLoginData({...loginData, email : e.target.value})} className="block w-84 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"/></div>
            <div className="m-3"><input placeholder="Enter password" onChange={(e) => setLoginData({...loginData, password : e.target.value})} className="block w-84 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"/></div>
            <button onClick={handleLogin} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button>
            <button onClick={() => router.push('/signup')}className="m-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Goto Singup</button>
        </div>
    </div>
}