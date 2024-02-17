import { NextRequest, NextResponse } from "next/server";
import User from "@/modals/userModal";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import {connect} from "./../../../../dbConfig/dbConfig";

connect();
export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email , password} = reqBody;
    console.log(reqBody);

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: "user not found" }, { status: 403 });
    }
    const validPassword = bcryptjs.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json({ error: "wrong password" }, { status: 401 });
    }
    //token data
    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };
    //generate token
    const token = jwt.sign(tokenData, process.env.SECRET_KEY!, {
      expiresIn: "1d",
    });
    const response = NextResponse.json({
      message: "login successful!",
      success: true,
    });
    response.cookies.set("sentToken", token, {
      httpOnly: true,
    });
    return response;
  } catch (error) {
    console.log(`error occurred ${error}`);
  }
}
