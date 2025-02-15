import { Request, Response } from "express";
import { User } from "../models/users";


export async function createUserController(req: Request, res:Response) {
    
    const user= req.body

    if(!user){
        res.status(400).json("request invalid, please check it and try again")
    }

    const userCreated= User.create({
        name: user.name,
        password: user.password,
        userName: user.userName
    })

    res.status(200).json(userCreated)
}