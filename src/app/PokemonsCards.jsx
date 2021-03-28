import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TypeFilter from './TypeFilter';
import Card from './Card';

export default function PokemonsCards(props) {
    const [pockemons, setPokemons] = useState([]);
    const [types, setTypes] = useState([]);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=12')
            .then(res => res.data.results)
            .then((allPokemons) => {
                allPokemons.forEach( pokemon => {
                    fetchPokemonData(pokemon)
                })
            })
            .catch(e => alert(e.message));
        axios.get('https://pokeapi.co/api/v2/type?limit=999')
            .then(res => {
                let types = res.data.results;
                console.log(types)
                setTypes(types)
            })
            .catch(e => alert(e.message));
    }, [])

    const fetchPokemonData = (pokemon) => {
        let url = pokemon.url;
        axios.get(url)
            .then(pokemonData => {
                setPokemons(prevState => [...prevState, pokemonData.data])
            })
            .catch(e => alert(e.message)); 
    }

    console.log(pockemons)
    return (
        <div className='container'>
            {/* <TypeFilter /> */}
            <div className="row justify-content-around">
                {pockemons.map((pocke) => {
                    return (
                        <div className="col-xs-12 col-sm-6 col-md-4" key={pocke.name+ '-' + pocke.id}>
                            <Card pocke={pocke} handlePockeInfo={props.handlePockeInfo}/>
                        </div>
                    )
                })}
            </div>
            <button className="btn btn-primary load-more">Load More...</button>
        </div>
    )
}