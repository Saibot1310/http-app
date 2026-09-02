const pokemonCache = new Map();

/**
 * Fetch Pokemon information from PokeAPI
 * @param {Number} id
 * @returns { Promise<Object> } Pokemon information
 */
export const getPokemonById = async (id) => {

  if (pokemonCache.has(id)) {
    console.log('Servido de caché');
    return pokemonCache.get(id);
  }

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  const data = await response.json();

  const pokemonData = {
    id: data.id,
    name: data.name,
    image: data.sprites.front_default
  }

  pokemonCache.set(id, pokemonData);

  return pokemonData;
};
