// src/pages/Home.jsx
import useGlobalReducer from "../hooks/useGlobalReducer";
import { EntityCard } from "../components/EntityCard";

export const Home = () => {
  const { store } = useGlobalReducer();

  // Solo los Pokémon necesitan imagen
  const pokeImg = url => {
    const id = url.split("/")[6];
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  };

  return (
    <>
      
      <div className="container-fluid px-0 py-4">
        <h2 className="ps-4">Pokémons</h2>
        <div className="scroll-section">
          {store.pokemons.map(p => (
            <EntityCard
              key={p.name}
              name={p.name}
              url={p.url}
              routePrefix="pokemons"
              getImageUrl={pokeImg}
            />
          ))}
        </div>
      </div>

     
      <div className="container-fluid px-0 py-4">
        <h2 className="ps-4">Locations</h2>
        <div className="scroll-section">
          {store.locations.length > 0 ? (
            store.locations.map(loc => (
              <EntityCard
                key={loc.name}
                name={loc.name}
                url={loc.url}
                routePrefix="locations"
              />
            ))
          ) : (
            <p className="ps-4">Loading locations…</p>
          )}
        </div>
      </div>

      
      <div className="container-fluid px-0 py-4">
        <h2 className="ps-4">Types</h2>
        <div className="scroll-section">
          {store.types.map(t => (
            <EntityCard
              key={t.name}
              name={t.name}
              url={t.url}
              routePrefix="types"
            />
          ))}
        </div>
      </div>
    </>
  );
};
