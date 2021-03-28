import React, {useState} from 'react';
import './App.css';
import PokemonsCards from './app/PokemonsCards';
import Pokemon from './app/Pokemon';

function App() {
  const [isSelectedPocke, setIsSelectedPocke] = useState(false);

  const handlePockeInfo = () => {
      setIsSelectedPocke(true)
  }

  return (
    <div className="App">
        <header className="App-header">
          Pokemondex
      </header>
        <div className='page-wrapper'>
          <section >
            <PokemonsCards handlePockeInfo={handlePockeInfo}/>
          </section>
          <aside >
            {isSelectedPocke ? <Pokemon /> : null}
            </aside>
        </div>
    </div>
  );
}

export default App;
