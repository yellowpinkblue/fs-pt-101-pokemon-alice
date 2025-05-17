import { useParams } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"
import { useEffect } from "react"
import pokeApiServices from "../services/pokeApiServices"


export const LocationDetails = () => {

    const { store, dispatch } = useGlobalReducer()
    const { id } = useParams()
    console.log("##########@@@@@@@@@@@@@@############## details.... " + store.locationDetails)
    const details = store.locationDetails;

    //Para extraer el ID de la URL ==> ya esta declarada antes! no puedo reemplazar...
    // id = url.split('/')[6] --> esto lo meto directamente en la llamada a getSingleLocation y le llega bien
    useEffect(()=>{
        pokeApiServices.getSingleLocation(id)
        .then(data => dispatch({ type: 'location_details', payload: data }))
        .catch(console.error);
    },[id, dispatch]);

    if (!details) return <p>loading NO DETAILS locations...</p>


    return (
        <div className="card card-pokemon p-3 m-2">
            
            <h2 className="text-capitalize">{details.name}</h2>
            <p>Region: {details.region?.name ?? '-'}</p>
            <p>Game indices:</p>
            <ul>
                {details.game_indices?.map(i => ( <li key={i.game_index}> {i.version?.name ?? 'Unknown'} — index #{i.game_index} </li> )) || <li>—</li>}
            </ul>
            <p>Areas: </p>
            <ul>
                { details.areas?.map(a => ( <li key={a.name}>{a.name}</li> )) || <li>—</li> }
            </ul>
        </div>
    );
};