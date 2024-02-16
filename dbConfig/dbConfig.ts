import mongoose from "mongoose";

export async function connect(){
    try{
        //mongoose.connect() is used to connect to mongodb
        mongoose.connect(process.env.MONGO_URI!);
        //below code listens to events on each connection
        const connection = mongoose.connection;

        //when database will be connected below callback will run
        connection.on('connected', () => {
            console.log('mongodb connected');
        })

        //when database will be not be connected below callback will run
        connection.on('error', () => {
            console.log('connection to mongodb failed!');
            process.exit();
        })
    }catch(error){
        console.log("something went wrong");
        console.log(error);
    }
}