import { Router } from "express"
import userRoutes from "./usersController.routes"

const router= Router();

router.use("/user", userRoutes)

export default router