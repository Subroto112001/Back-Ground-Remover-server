import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./config/mongoose.js";
import userRouter from "./routes/user.Route.js";

const app = express();

// Database connection (BEFORE other middleware)
let isConnected = false;
app.use(async (req, res, next) => {
  if (!isConnected) {
    try {
      await connectDB();
      isConnected = true;
    } catch (error) {
      console.error("Database connection failed:", error);
      return res.status(500).json({ error: "Database connection failed" });
    }
  }
  next();
});

// CORS
app.use(cors());

// Raw body for webhooks (BEFORE express.json)
app.use("/api/user/webhooks", express.raw({ type: "application/json" }));

// Other middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.status(200).send("API is Running");
});

app.use("/api/user", userRouter);

// Only listen in development
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server Running on port http://localhost:${PORT}`);
  });
}

// Export for Vercel
export default app;
