import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("DB CONNECTED!");
    } catch (error) {
        console.error("MongoDB Error:");
        console.error(error);
    }
};

export default connectDB;