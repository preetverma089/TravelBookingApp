import mongoose from "mongoose";

export const mongoEventsInit = () => {
    mongoose.connection.on("connected", () => {
        console.log("📡 MongoDB connected");
    });
    mongoose.connection.on("error", (err) => {
        console.log("❌ MongoDB error:", err.message);
    });
    mongoose.connection.on("disconnected", () => {
        console.log("🔌 MongoDB disconnected");
    })
}