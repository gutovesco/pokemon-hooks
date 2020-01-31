import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import './index.css';

export default function App() {
    const [pokedexm, setPokedex0] = useState([]);
    const [wildPokemon, setWildPokemon] = useState({});

    useEffect(() => {
        encounterWildPokemon()
    }, [])

    const pokeId = () =>{
        const min = Math.ceil(1);
        const max = Math.floor(151);
        return Math.floor(Math.random() + (max - min + 1)) + min
    }

    const encounterWildPokemon = () =>{
        axios.get('https://pokeapi.co/api/v2/pokemon/' + pokeId()).then(response => {
            console.log(response.data)
            setWildPokemon(response.data)
        })
    }
    return (
      <div className="app-wrapper">
        <header>
            <h1 className="title">Hooks</h1>
            <h3 className="subtitle">Com Pokemons!</h3>
        </header>

        <section className="wild-pokemon">
            <h2>Encontro com Pokemon selvagem</h2>
            <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + wildPokemon.id + ".png"} className="sprite" />
            <h3>{wildPokemon.name}</h3>
            <button className="catch-btn">Catch!</button>
        </section>

        <section className='pokedex'>
            <h2>Pokédex</h2>
            <div className="pokedex-list">
            {pokedexm.map(pokemon => (
                <div className="pokemon" key={pokemon.id}>
                    <img className="sprite" src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + wildPokemon.id + ".png"} />
                    <h3 className="pokemon-name">{pokemon.name}</h3>
                    <button className="remove">&times;</button>
                </div>
            ))}
            </div>
        </section>
      </div>
    );
  }

ReactDOM.render(<App />, document.getElementById('root'));
