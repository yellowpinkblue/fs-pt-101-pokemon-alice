import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const EntityCard = ({ name, url, routePrefix, getImageUrl }) => {
  const { store, dispatch } = useGlobalReducer();
  const isFavorite = store.favorites.some(f => f.name === name);
  const toggleFavorite = () =>
    dispatch({
      type: isFavorite ? "remove_fav" : "add_fav",
      payload: { name, url }
    });

  // extrae el ID de cualquier URL v2 (pokemon, location, type)
  const id = url.split("/")[6];
  const imgSrc = getImageUrl ? getImageUrl(url) : null;

  return (
    <div className="card card-pokemon p-3 m-2">
      {imgSrc && (
        <img
          src={imgSrc}
          className="card-img-top-poke"
          alt={name}
        />
      )}
      <div className="card-body text-center">
        <h5 className="card-title text-capitalize">{name}</h5>
        <Link
          to={`/${routePrefix}/${id}`}
          className="btn btn-sm btn-primary mb-2"
        >
          See more
        </Link>
        <button
          className={`btn btn-sm ${
            isFavorite ? "btn-warning" : "btn-outline-warning"
          }`}
          onClick={toggleFavorite}
        >
          <i
            className={`fa-${isFavorite ? "solid" : "regular"} fa-heart`}
          />
        </button>
      </div>
    </div>
  );
};