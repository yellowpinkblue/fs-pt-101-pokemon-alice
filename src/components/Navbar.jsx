import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";

export const Navbar = () => {

	const { store, dispatch } = useGlobalReducer();

	const handleRemove = (fav) => {
		dispatch({ type: "remove_fav", payload: fav });
	};

	

	return (
		<nav className="navbar navbar-light bg-light px-4 d-flex justify-content-between">
			<Link to="/">
				<img src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg" alt="logo" />
			</Link>
			<div className="dropdown">
				<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">
					Favorites {store.favorites.length}
				</button>
				<ul className="dropdown-menu dropdown-menu-end">
					{store.favorites.length === 0 ? (
						<li className="dropdown-item text-muted"> No favorites</li>
					) : (
						store.favorites.map((fav, i) => (
							<li className="dropdown-item d-flex justify-content-between" key={i}>
								<span>{fav.name}</span>
								<i
									className="fas fa-trash text-danger"
									style={{ cursor: "pointer" }}
									onClick={() => handleRemove(fav)}
								></i>
							</li>
						))
					)}
				</ul>
			</div>
		</nav>
	);
};
