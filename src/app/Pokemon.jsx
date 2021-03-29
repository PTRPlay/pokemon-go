import React from 'react';

export default function Pokemon(props) {

    const { poke } = props;

    return (
        <div className="card sticky-top selected-pokemon">
            <img className="card-img-top" src={`https://pokeres.bastionbot.org/images/pokemon/${poke.id}.png`} alt={`${poke.name}`}></img>
            <div className="card-body selected-card-body">
                <h5 className="card-title">{poke.name + '   #' + poke.id}</h5>
                <div className="card-text">
                    <div className="table-wrapper-scroll-y my-custom-scrollbar"> 
                    <table className="table table-bordered table-striped mb-0">
                        <tbody>
                            <tr>
                                <th scope="row">Type</th>
                                <td>{poke.types.length === 1 ? poke.types[0].type.name : poke.types[0].type.name + ', '  + poke.types[1].type.name} </td>
                            </tr>
                            {poke.stats.map(stat => {
                                return (
                                    <tr key={poke.id + stat.stat.name}>
                                        <td scope="row">{stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)}</td>
                                        <td key={stat.stat.name}>{stat.base_stat}</td>
                                    </tr>
                                )
                            })}
                            <tr>
                                <th scope="row">Weight</th>
                                <td>{poke.weight}</td>
                            </tr>
                            <tr>
                                <th scope="row">Total moves</th>
                                <td>{poke.moves.length} </td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </div>
    )
}