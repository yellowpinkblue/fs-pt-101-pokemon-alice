import { PokeCard } from "../components/PokeCard"
import useGlobalReducer from "../hooks/useGlobalReducer"
import { LocationDetails } from "./LocationDetails"


export const LocationList = ({ name, url }) => {
    const { store } = useGlobalReducer()

    // console.log("store.locations =" , store.locations)

    return (

        <div className="container-fluid px-0 py-4" >
            <h2 className="ps-4"> Locations {name}</h2>
            <p>{url}</p>
             <img 
                    src="{url}"
                    className="card-img-top-poke"
                    alt="{name}" 
                />
            <div className="scroll-section" >
                    <LocationDetails
                        key={name}
                        name={name}
                        url={url}
                        category="locations"
                        routePrefix="locations"
                    />
                
            </div>
        </div>
    )
}