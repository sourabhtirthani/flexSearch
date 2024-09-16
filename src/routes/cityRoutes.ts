import { Router } from "express";
import { findCity } from "../controllers/cityController";

const router = Router();

router.get('/:type', findCity);

export default router;
