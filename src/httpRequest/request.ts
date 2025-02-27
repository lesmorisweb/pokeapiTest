import axios from "axios"


export async function getApiData(name:string) {
    try {
        const url= `https://pokeapi.co/api/v2/pokemon/${name}`

        return await axios.get(url)
    }
    catch(e){
        return e
    }

}