import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : [true, "please provide an username"],
        unique : true
    },
    email : {
        type : String,
        required : [true, "please provide an email"],
        unique : true
    },
    password : {
        type : String,
        required : [true, "please provide a password"]
    },
    isVerified: {
        type : Boolean,
        default : false
    },
    isAdmin: {
        type : Boolean,
        default : false
    },
    forgotPasswordToken : String,
    forgotPasswordTokenExpirty : String,
    verifyToken : String,
    verifyTokenExpirty : String
});

const User = mongoose.models.users || mongoose.model('users', userSchema);

export default User;