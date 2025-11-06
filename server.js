// import 'dotenv/config'
// import express from 'express'
// import cors from 'cors'
// import connectDB from './config/mongoose.js'
// import userRouter from './routes/user.Route.js'



// // App config

// const  PORT = process.env.PORT || 5000
// const app = express()

// await connectDB()
// app.use(cors())



// // Initialize Middleware

// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))
// app.use(express.static('public'))
// app.use(cors())



// // api route

// app.get('/', (req, res) => {
//     res.status(200).send('API is Running')
// })
// app.use('/api/user',userRouter)

// app.listen(PORT, () => {
//     console.log(`Server Running on port http://localhost:${PORT}`)
// })

import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./config/mongoose.js";
import userRouter from "./routes/user.Route.js";
import bodyParser from "body-parser";

const app = express();

// ✅ Database
await connectDB();

// ✅ CORS
app.use(cors());

// ✅ Normal body parser for non-webhook routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Static
app.use(express.static("public"));

// ✅ RAW BODY ONLY FOR WEBHOOKS
app.use("/api/user/webhooks", bodyParser.raw({ type: "*/*" }));

// ✅ Routes
app.get("/", (req, res) => {
  res.status(200).send("API is Running ✅");
});
app.use("/api/user", userRouter);

// ✅ Export instead of app.listen
export default app;
