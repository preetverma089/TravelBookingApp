import mongoose from "mongoose";
import { endpoints } from "./endpoints.js";

const uri = endpoints.mongoUri;
export const connectDB = async () => {
    try {
        await mongoose.connect(uri);
        console.log(`✅ MongoDB Connected: ${mongoose.connection.host}`);

    } catch (error) {
        console.log("Mongo connection Failed", error.message);
        process.exit(1);
    }
}
