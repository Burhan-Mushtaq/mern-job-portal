import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
    .then(()=> console.log("MongoDB connected"))
    .catch(err => console.log(err));

app.get("/", (req,res)=>{
    res.send("Job Portal API Running");
})

app.use("/api/auth" , authRoutes);
app.use("/api/jobs", jobRoutes);

app.listen(5000 , ()=> console.log("Server running"));