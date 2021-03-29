import React, { useState, useEffect } from 'react';
import TypeFilter from './TypeFilter';
import Card from './Card';

export default function PokemonsCards(props) {


    return (
        <div className='container'>
            <TypeFilter pokemons={props.pokemons} setPokemons={props.setPokemons}/>
            <div className="row justify-content-around">
                {props.pokemons.map((poke) => {
                    return (
                        <div className="col-xs-12 col-sm-6 col-md-4" key={poke.name+ '-' + poke.id} style={{display: poke.visible ? 'block' : 'none'}}>
                            <Card poke={poke} handlePokeInfo={props.handlePokeInfo}/>
                        </div> 
                    )
                    })}
            </div>
            <button className="btn btn-primary load-more" onClick={props.handleMorePokemons}>Load More...</button>
        </div>
    )
}