import { Link } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"

export const PokeCard = ({ name, url, category, routePrefix, getImageUrl }) => {

    //Otra opción es hacerlo en dos lineas, así:  
    // 1. let aux = url.split('/')
        // (+)
    // 2. let id = aux[6]

    const { dispatch, store } = useGlobalReducer();

    //Para extraer el ID de la URL
    const id = url.split('/')[6]

    const isFavorite = store.favorites.some(fav => fav.name === name);

    const toggleFavorite = () => {
        dispatch({ type: isFavorite ? "remove_fav" : "add_fav", payload: { name , url, category } });
    };

    //Solo si recibo url de imagen, lo uso, sino, no. 
    const imgSrc = getImageUrl ? getImageUrl(url) : null;
  

    return (

        <div className="card card-pokemon p-3 m-2">
            {imgSrc && (
 
                <img 
                    src={imgSrc}
                    className="card-img-top-poke"
                    alt="{name}" 
                />
            )}

            <div className="card-body-poke text-center">

                <h3 className="card-title text-capitalize">{name}</h3>
                <Link to={`/${routePrefix}/${id}`}> See more</Link>
                <button className={`btn btn-sm ${ isFavorite ? "btn-warning" : "btn-outline-warning" }`} onClick={toggleFavorite} >
                    <i className={`fa-${isFavorite ? "solid" : "regular"} fa-heart`}></i>
                </button>

            </div>
        </div>

    )
}

