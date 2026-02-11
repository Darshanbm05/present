import express from "express";
import {getBuses} from "../controllers/busController.js";

const router=express.Router();

router.get("/",getBuses);

export default router;