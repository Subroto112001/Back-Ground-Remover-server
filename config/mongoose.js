import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => {
            console.log(`Database Connected Successfully`);
            
        })
        const con = await mongoose.connect(`${process.env.MONGODB_URI}/background-removal`);
        
    } catch (error) {
        console.log(error);
       
    }
};

export default connectDB;