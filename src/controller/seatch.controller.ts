import { Request, Response } from "express";
import { getApiData } from "../httpRequest/request";
import { PokeSearch } from "../models/pokeSearch";


export async function getPokemonsByName (req: Request, res: Response){
    const pokemon= req.body
    const getPoke= await getApiData(pokemon.name);

    if(!getPoke){
        res.status(404).json("this pokemon don't exist")
        return
    }

    const pokesearch= PokeSearch.create({
        pokemonId: pokemon.id,
        pokemonName: pokemon.name,
        userId: pokemon.userId,
        userName: pokemon.userName
    })
    
    res.status(200).json(pokesearch)

}