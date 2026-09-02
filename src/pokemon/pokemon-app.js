import { getPokemonById } from "./actions/get-pokemon-by-id.action";

/**
 * Esta función crea la aplicación en el div enviado
 * @param {HTMLDivElement} element 
 */
export const PokemonApp = async (element) => {

  document.title = 'Pokemon App';
  const titleElement = document.querySelector('#app-title');

  titleElement && (titleElement.innerHTML = 'Pokemon App');

  // Referencias HTML
  const loadingParagraph = document.createElement('p');
  const pokemonImage = document.createElement('img');
  const nextBtn = document.createElement('button');
  const prevBtn = document.createElement('button');

  // Configuraciones
  loadingParagraph.textContent = 'Cargando...';
  nextBtn.textContent = 'Siguiente';
  prevBtn.textContent = 'Anterior';

  element.append(loadingParagraph);
  element.append(pokemonImage);
  element.append(nextBtn);
  element.append(prevBtn);

  //! Listeners de los botones

  // Renderizar el pokemon
  const renderPokemon = (pokemon) => {
    pokemonImage.src = pokemon.image;
    loadingParagraph.textContent = `Pokemon #${pokemon.id} ${pokemon.name}`;
  }

  //! Hacer la petición inicial

  renderPokemon(await getPokemonById(1));

}