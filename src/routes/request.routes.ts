import { Router } from "express";
import { getPokemons } from "../controller/request.controller";


const router= Router()

router.get("/request", getPokemons)