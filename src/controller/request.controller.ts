import { Request, Response } from "express";
import { pokeData } from "../httpRequest/request";


export async function getPokemons (req: Request, res: Response){
    const pokemon= req.body

    if(!pokemon){
        res.status(400).json("reques invalid")
    }

    res.status(200).json(pokeData)
}