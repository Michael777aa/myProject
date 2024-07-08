import express from "express";
import restaurantController from "./controllers/member.controllers";

const router = express.Router();

router.get("/", restaurantController.goHome);

export default router;
