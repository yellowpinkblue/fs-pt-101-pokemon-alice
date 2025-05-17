

const pokeApiServices = {}


pokeApiServices.getAllPokemon = async () => {

    try {
        const resp = await fetch('https://pokeapi.co/api/v2/pokemon');
        if (!resp.ok) throw new Error('Error fetching Pokemons')
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error);
    }
}

pokeApiServices.getSinglePokemon = async (id) => {
    try {
        const resp = await fetch('https://pokeapi.co/api/v2/pokemon/' + id);
        if (!resp.ok) throw new Error('Error fetching all pokemon')
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error);
    }
}

pokeApiServices.getAllLocations = async () => {
  const resp = await fetch('https://pokeapi.co/api/v2/location?limit=50');
  if (!resp.ok) throw new Error('Error fetching Locations');
  return resp.json();
};

pokeApiServices.getSingleLocation = async (id) => {
    const resp = await fetch ('https://pokeapi.co/api/v2/location/' + id);
    if (!resp.ok) throw new Error ('Error fetching Location details on pokeApiServices');
    const data = await resp.json()
    // console.log("############### resp.json del location id... " + JSON.stringify(data) )
    return data
    // return resp.json();
};

pokeApiServices.getAllTypes = async () => {
  const resp = await fetch('https://pokeapi.co/api/v2/type');
  if (!resp.ok) throw new Error('Error fetching Types');
  return resp.json();
};

pokeApiServices.getSingleType = async (id) => {
    const resp = await fetch ('https://pokeapi.co/api/v2/type/' + id);
    if (!resp.ok) throw new Error ('Error fetching Type details');
    return resp.json();
};

export default pokeApiServices