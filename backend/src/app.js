import express from "express";
import cors from "cors";
import busRoutes from "./routes/busRoutes.js"
import contributionRoutes from "./routes/contributionRoutes.js";

const app=express();

app.use(cors());
app.use(express.json());

app.use("/api/buses",busRoutes);
app.use("/api/contributions",contributionRoutes);

app.get("/",(req,res)=>{
    res.send("API running");
});

export default app;