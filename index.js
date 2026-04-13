import Express from "express"
const app = Express();
import { endpoints } from "./src/utils/endpoints.js";
import { connectDB } from "./src/utils/dbConfig.js";
import { mongoEventsInit } from "./src/events/mongoEvents.js";
import { processEventsInit } from "./src/events/processEvents.js";
import userRoute from "./src/routes/userRoute.js";
import { rateLimiter } from "./src/middlewares/rateLimiter.js";
import { corsMiddleware } from "./src/middlewares/cors.js";
mongoEventsInit();
processEventsInit();
app.use(Express.json());
app.use(corsMiddleware);
app.use(rateLimiter);
app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(500).json({ message: err.message });
});

app.get("/health", (req, res) => {
    res.send("Server is healthy");
})
app.use("/users", userRoute)
app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});

connectDB();


const server = app.listen(endpoints.port, () => {
    console.log(`Server is started at port ${endpoints.port}`)
})


server.on("error", (err) => {
    console.error("❌ Server error:", err.message);
    if (err.code === "EADDRINUSE") {
        console.log("⚠️ Port already in use");
    }

    process.exit(1);
})
server.on("listening", () => {
    console.log("📡 Server listening event triggered");
});

server.on("close", () => {
    console.log("🔌 Server closed");
});
