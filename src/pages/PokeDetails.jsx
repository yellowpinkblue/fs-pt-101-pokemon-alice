import { useParams } from "react-router-dom"
import { useEffect } from "react"
import pokeApiServices from "../services/pokeApiServices"
import useGlobalReducer from "../hooks/useGlobalReducer"

export const PokeDetails = () => {

    const { store, dispatch } = useGlobalReducer()
    const params = useParams()
    const { id } = useParams()

    useEffect(()=>{
        pokeApiServices.getSinglePokemon(id)
        .then(data=> dispatch({type: 'pokemon_details', payload:data})
        )
        .catch(console.error)
    },[id, dispatch]);

    if(!store.details){
        return <p> Loading NOO details </p>
    }

    const { name, weight, types } = store.details;
    

    return (
        <div className="container py-4 justify-content-center" >
            <h2> Details for {name} </h2>
    
            <p>Weight: {weight}</p>
            <div>
                Types {types?.map(el => ( <p key={el.type.name}  > {el.type.name} </p> ))}
            </div>
        </div>
    )
}