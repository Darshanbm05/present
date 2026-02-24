import express from "express";
import { createContribution } from "../controllers/contributionController.js";

const router=express.Router();

router.post("/",createContribution);

export default router;