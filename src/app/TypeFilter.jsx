import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function TypeFilter(props) {
    const [types, setTypes] = useState([]);
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/type?limit=999')
            .then(res => {
                let types = res.data.results;
                setTypes(types)
            })
            .catch(e => alert(e.message));
    }, [])

    const filterPokemons = (selectedType) => {
        debugger
        let filteredPokemons = props.pokemons.map(poke => {
            const typeExists = poke.types.some(t => t.type.name === selectedType);
            if (!typeExists) {
              poke["visible"] = false;
            } else poke["visible"] = true;
            return poke;
          })
        props.setPokemons(filteredPokemons)
    }

    return (
        <div className="btn-toolbar justify-content-center" role="group" aria-label="Filter button">
            {types.map((type) => {
                return (
                    <button type="button" key={type.name} className="btn btn-outline-success mb-3" onClick={() => { filterPokemons(type.name) }}>{type.name}</button>
                )
            })}
        </div>
    )
}