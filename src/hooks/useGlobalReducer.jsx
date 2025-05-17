// Import necessary hooks and functions from React.
import { useContext, useReducer, createContext, useEffect } from "react";
import pokeApiServices from "../services/pokeApiServices";
import storeReducer, { initialStore } from "../store"  // Import the reducer and the initial state.

// Create a context to hold the global state of the application
// We will call this global state the "store" to avoid confusion while using local states
const StoreContext = createContext()

// Define a provider component that encapsulates the store and warps it in a context provider to 
// broadcast the information throught all the app pages and components.
export function StoreProvider({ children }) {
    // Initialize reducer with the initial state.
    const [store, dispatch] = useReducer(storeReducer, initialStore());

    useEffect(()=>{
        //fetch pokemons:
        pokeApiServices.getAllPokemon()
        .then(data => dispatch({ type: 'pokemon_data', payload: data }))
        .catch(console.error);

        //fetch Locations:
        pokeApiServices.getAllLocations()
        .then(data => {
            console.log ("locations fetch:", data.results);
            dispatch({ type: "location_data", payload: data });
        })
        
        .catch(console.error);


        //fetch types:
        pokeApiServices.getAllTypes()
        .then(data => dispatch({ type: 'type_data', payload: data }))
        .catch(console.error);

    },[]);




    // Provide the store and dispatch method to all child components.
    return ( 
        <StoreContext.Provider value={{ store, dispatch }}>
            {children}
        </StoreContext.Provider>
    );
}

// Custom hook to access the global state and dispatch function.
export default function useGlobalReducer() {
    return useContext(StoreContext);
}