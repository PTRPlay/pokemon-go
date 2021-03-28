import React from 'react';

export default function Card(props) {


    return (
        <div className="card" onClick={props.handlePockeInfo}>
            <img className="card-img-top" src={`https://pokeres.bastionbot.org/images/pokemon/${props.pocke.id}.png`} alt={`${props.pocke.name}`}></img>
            <div className="card-body">
                <h5 className="card-title">{props.pocke.name}</h5>
                <div className="card-text">
                    {props.pocke.types.map(type => {
                        return (
                            <span className="badge badge-success mr-1" key={type.slot}>{type.type.name}</span>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}