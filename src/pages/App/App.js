import './App.css';
import axios from 'axios';
import Dashboard from '../Dashboard/Dashboard';
import Details from '../Details/Details';
import { getUser } from '../../utilities/users-service';
import NavBar from '../../components/NavBar/NavBar';
import Register from '../Register/Register';
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

const App = () => {
	const [user, setUser] = useState(getUser());
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
		<main>
			{user ? (
				<>
					<NavBar user={user} setUser={setUser} />
					<Routes>
						<Route
							path="/"
							element={
								<Dashboard
									pokemon={pokemon}
									pokemonData={pokemonData}
									pokemonType={pokemonType}
									getPokemon={getPokemon}
									setPokemon={setPokemon}
								/>
							}
						/>
						<Route path="/details" element={<Details />} />
					</Routes>
				</>
			) : (
				<Register setUser={setUser} />
			)}
		</main>
	);
};

export default App;
