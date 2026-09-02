import { getPokemonById } from "./actions/get-pokemon-by-id.action";

/**
 * Esta función crea la aplicación en el div enviado
 * @param {HTMLDivElement} element 
 */
export const PokemonApp = async (element) => {

  let pokemonId = 1;

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
  nextBtn.addEventListener('click', async () => {
    loadingParagraph.textContent = 'Cargando siguiente pokemon...';
    pokemonId++;
    renderPokemon(await getPokemonById(pokemonId))
  });

  prevBtn.addEventListener('click', async () => {

    if (pokemonId === 1) return;

    loadingParagraph.textContent = 'Cargando anterior pokemon...';

    pokemonId--;
    renderPokemon(await getPokemonById(pokemonId))
  });

  // Renderizar el pokemon
  const renderPokemon = (pokemon) => {
    pokemonImage.src = pokemon.image;
    loadingParagraph.textContent = `Pokemon #${pokemon.id} ${pokemon.name}`;
  }

  //! Hacer la petición inicial

  renderPokemon(await getPokemonById(pokemonId));

}