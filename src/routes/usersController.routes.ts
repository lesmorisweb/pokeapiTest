import { Router } from "express";
import { createUserController } from "../controller/user.controller";


const router= Router();

router.post("/createUser", createUserController)

export default router;