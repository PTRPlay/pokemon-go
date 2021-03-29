import React from 'react';

export default function Pokemon(props) {

    const { poke } = props;
    
    return (
        <div className="card selected-pockemon">
            <img className="card-img-top" src={`https://pokeres.bastionbot.org/images/pokemon/${poke.id}.png`} alt={`${poke.name}`}></img>
            <div className="card-body">
                <h5 className="card-title">{poke.name + '   #' + poke.id}</h5>
                <div className="card-text">
                    <div className="row">
                    <div className="col-6">
                        <ul className="row p-0 size-small">
                            <li className="list-group-item col-12">Type</li>
                            <li className="list-group-item col-12">HP</li>
                            <li className="list-group-item col-12">Attack</li>
                            <li className="list-group-item col-12">Defense</li>
                            <li className="list-group-item col-12">SP Attack</li>
                            <li className="list-group-item col-12">SP Defense</li>
                            <li className="list-group-item col-12">Speed</li>
                            <li className="list-group-item col-12">Weight</li>
                            <li className="list-group-item col-12">Total Moves</li>
                        </ul>
                        </div>
                        <div className="col-6">
                        <ul class="row p-0">
                            <li class="list-group-item col-12">{poke.types[0].type.name}</li>
                            {poke.stats.map(stat => {
                                return (
                                    <li class="list-group-item col-12" key={stat.stat.name}>{stat.base_stat}</li>
                                )
                            })}
                            <li class="list-group-item col-12">{poke.weight}</li>
                            <li class="list-group-item col-12">{poke.moves.length}</li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}