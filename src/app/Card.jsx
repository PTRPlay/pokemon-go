import React from 'react';

export default function Card(props) {

    const selectedPoke = () => {
        props.handlePokeInfo(props.poke)
    }

    return (
        <div className="card" onClick={selectedPoke}>
            <img className="card-img-top" src={`https://pokeres.bastionbot.org/images/pokemon/${props.poke.id}.png`} alt={`${props.poke.name}`}></img>
            <div className="card-body">
                <h5 className="card-title">{props.poke.name}</h5>
                <div className="card-text">
                    {props.poke.types.map(type => {
                        return (
                            <span className="badge badge-success mr-1" key={type.slot}>{type.type.name}</span>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}