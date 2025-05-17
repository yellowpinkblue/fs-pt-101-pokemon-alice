export const initialStore = () => ({
  favorites: [],
  pokemons: [],
  locations: [],
  locationDetails: null,
  types: [],
  details:[],
  message: null,
  todos: [
    {
      id: 1,
      title: "Make the bed",
      background: null,
    },
    {
      id: 2,
      title: "Do my homework",
      background: null,
    }
  ]
});

export default function storeReducer(state, action = {}) {
  switch (action.type) {

    case 'pokemon_data':
      return {
        ...state,
        pokemons: action.payload.results || action.payload // para compatibilidad
      };

    case 'location_data':
      return {
        ...state, 
        locations: action.payload.results || action.payload
      };

    case 'location_details':
      return { 
        ...state, 
        locationDetails: action.payload.results || action.payload
      };
    
    case 'type_data':
      return {
        ...state,
        types: action.payload.results || action.payload
      };

    case 'type_details':
      return { 
        ...state, 
        typeDetails: action.payload 
      };

    case 'pokemon_details':
      return {
        ...state,
        details: action.payload
      };


    case 'add_task':
      const { id, color } = action.payload;
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === id ? { ...todo, background: color } : todo
        )
      };

    case "add_fav":
      if (state.favorites.find(fav => fav.name === action.payload.name)) return state;
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };

    case "remove_fav":
      return {
        ...state,
        favorites: state.favorites.filter(fav => fav.name !== action.payload.name)
      };

    default:
      throw Error('Unknown action :((( --> ' + action.type);
  }
}
