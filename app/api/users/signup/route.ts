import {connect} from "./../../../../dbConfig/dbConfig";
import User from "./../../../../modals/userModal";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect();

export async function POST(request : NextRequest){
    console.log('api hit')
    try {
        const reqBody = await request.json();
        const {username, email, password} = reqBody;
        console.log(reqBody);

        //check if user already exists
        const user = await User.findOne({username});
        if(user){
            return NextResponse.json({error: "user already exists"});
        }else{
            //hashing password
            console.log('user not present already');
            const salt = await bcryptjs.genSalt(10);
            const hashPassword = await bcryptjs.hash(password, salt);
            console.log(`hashpassword is ${hashPassword}`)
            const newUser = new User({
                username,
                email,
                password : hashPassword
            });

            const savedUser = await newUser.save();
            console.log('user saved');
            console.log(savedUser);
            return NextResponse.json(`user was saved`);
        }

    } catch (error: any) {
        return NextResponse.json({error : error.message}, {status : 500})
    }
}


