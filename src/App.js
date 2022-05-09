import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
const App = () => {
	const [pokemon, setPokemon] = useState('Charmander');
	const [pokemonData, setPokemonData] = useState([]);
	const [pokemonType, setPokemonType] = useState('');
	return (
		<div className="App">
			<h1>Pokedex</h1>
		</div>
	);
};

export default App;
