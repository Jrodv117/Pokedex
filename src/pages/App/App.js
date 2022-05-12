import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import SearchBar from '../../components/SearchBar/SearchBar';
import Landing from '../../components/LandingPage/LandingPage';

const App = () => {
	const [pokemon, setPokemon] = useState('');
	const [pokemonData, setPokemonData] = useState([]);
	const [pokemonType, setPokemonType] = useState('');

	const getPokemon = async () => {
		const toArray = [];
		try {
			const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
			const res = await axios.get(url);
			//uses push() to add res data to our array
			toArray.push(res.data);
			console.log(res.data);
			//gets the type from data in res
			setPokemonType(res.data.types[0].type.name);
			setPokemonData(toArray);
			console.log(res.data.types[0].type.name);
			console.log(res);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<div>Dashboard</div>} />
					<Route path="/register" element={<div>Dashboard</div>} />
					<Route path="/landing" element={<Landing />} />
				</Routes>
			</BrowserRouter>
			<div className="App">
				<h1>Pokedex</h1>
				<SearchBar
					pokemon={pokemon}
					setPokemon={setPokemon}
					getPokemon={getPokemon}
					pokemonType={pokemonType}
					pokemonData={pokemonData}
				/>
			</div>
		</>
	);
};

export default App;
