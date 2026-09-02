/**
 * Fetch Pokemon information from PokeAPI
 * @param {Number} id
 * @returns { Promise<Object> } Pokemon information
 */
export const getPokemonById = async (id) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  const data = await response.json();

  const pokemonData = {
    id: data.id,
    name: data.name,
    image: data.sprites.front_default
  }

  console.log(pokemonData);

  return pokemonData;
};
