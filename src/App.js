import React, {useState, useEffect} from 'react';
import './App.css';
import PokemonsCards from './app/PokemonsCards';
import Pokemon from './app/Pokemon';
import axios from 'axios';

let offset = 0;

function App() {
  const [loadedPoke, setLoadedPoke] = useState({});
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getMorePokemos();
  }, [])

  const getMorePokemos = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=12`)
    .then(res => res.data.results)
    .then((allPokemons) => {
        allPokemons.forEach( pokemon => {
            fetchPokemonData(pokemon)
        })
    })
    .catch(e => alert(e.message));
  }

  const fetchPokemonData = (pokemon) => {
      let url = pokemon.url;
      axios.get(url)
          .then(pokemonData => {
              setPokemons(prevState => { 
                return [...prevState, pokemonData.data].map(poke => {
                poke["visible"] = true;
                return poke
              })})
          })
          .catch(e => alert(e.message)); 
  }
  console.log(pokemons)

  const handlePokeInfo = (pockemon) => {
    setLoadedPoke(pockemon)
  }

  const handleMorePokemons = () => {
    offset+=12
    getMorePokemos();
  }

  console.log(pokemons)

  const handlePokemons = (poke) => {
    setPokemons(poke)
  }

  return (
    <div className="App">
        <header className="App-header">
          <h1>Pokedex</h1>
      </header>
        <div className='page-wrapper'>
          <section >
            <PokemonsCards handlePokeInfo={handlePokeInfo} setPokemons={handlePokemons} pokemons={pokemons} handleMorePokemons={handleMorePokemons}/>
          </section>
          <aside>
            {Object.keys(loadedPoke).length !== 0 ? <Pokemon poke={loadedPoke} /> : null}
            </aside>
        </div>
    </div>
  );
}

export default App;
