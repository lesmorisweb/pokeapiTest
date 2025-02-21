import axios from "axios"


export const pokeData=  async function getApiData() {
    const url= "https://pokeapi.co/api/v2/"
    const query= ""

    const completeUrl= `${url}${query}`

    await axios.get(completeUrl)
    .then((result)=> {
        return result.data })
    .catch((e)=>
        {return (e)}
    )

}