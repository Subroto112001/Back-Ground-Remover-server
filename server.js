import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./config/mongoose.js";
import userRouter from "./routes/user.Route.js";

// App config
const PORT = process.env.PORT || 5000;
const app = express();
await connectDB();
app.use(cors());

// Initialize Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));


// api route
app.get("/", (req, res) => {
  res.status(200).send("API is Running");
});

app.use("/api/user", userRouter);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
export default app;