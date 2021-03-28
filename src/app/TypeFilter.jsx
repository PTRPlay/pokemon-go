import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function Card() {
    const [types, setTypes] = useState([]);
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/type?limit=999')
            .then(res => {
                let types = res.data.results;
                setTypes(types)
            })
            .catch(e => alert(e.message));
    }, [])
console.log(types)
    return (
        <div className="btn-group" role="group" aria-label="Filter button">
            {types.map((type) => {
                return(
                 <button type="button" className="btn btn-secondary">{type.name}</button>
            )})}
        </div>
    )
}