import { useParams } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"
import { useEffect } from "react"
import pokeApiServices from "../services/pokeApiServices"

export const PokeTypeDetails = () => {
    const { id } = useParams()
    const { store, dispatch } = useGlobalReducer()
    const details = store.typeDetails

    useEffect(() => { pokeApiServices.getSingleType(id)
        .then(data => dispatch({ type: 'type_details', payload: data }))
        .catch(console.error);
    }, [ id, dispatch ]);


    if (!store.details) return <p>Loading NO type...</p>

    return (

        <div className="container py-4">

            <h2 className="text-capitalize">{details.name}</h2>
            <p>Damage relations:</p>
            <ul>
                {Object.entries(details.damage_relations).map(([relation, arr]) => (
                    <li key={relation} >
                        <strong> {relation.replace(/_/g, ' ')}: </strong> { " " }
                        {arr.map( t => t.name ).join (', ')}
                    </li>
                ))}
            </ul>
            <p>Pokémons with this type:</p>
            <ul>
                {details.pokemon.map(p => (
                    <li key={p.pokemon.name} > {p.pokemon.name} </li>
                ))}
            </ul>

        </div>

    )

}