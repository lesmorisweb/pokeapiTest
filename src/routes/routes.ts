import { Router } from "express"
import userRoutes from "./usersController.routes"
import { getPokemonsByName } from "../controller/seatch.controller";

const router= Router();

router.use("/user", userRoutes)
router.use("/poke", getPokemonsByName)

export default router