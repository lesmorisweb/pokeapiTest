import { Router } from "express";
import { getPokemonsByName } from "../controller/seatch.controller";

const router= Router()

router.post("/getpoke", getPokemonsByName)

export default router