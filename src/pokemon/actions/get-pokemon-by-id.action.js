/**
 * Fetch Pokemon information from PokeAPI
 * @param {Number} id 
 * @returns { Object } Pokemon information
 */
export const getPokemonById = (id) => {

  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.warn(error);
    })

  return {}

}