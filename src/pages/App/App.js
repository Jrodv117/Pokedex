import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from '../Dashboard/Dashboard';
import Details from '../Details/Details';
import { getUser } from '../../utilities/users-service';
import NavBar from '../../components/NavBar/NavBar';
import Register from '../Register/Register';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

const App = () => {
	const [user, setUser] = useState(getUser());
	const [pokemon, setPokemon] = useState('');
	const [pokemonData, setPokemonData] = useState([]);
	const [pokemonType, setPokemonType] = useState('');

	//getPokemon is a function that leveradges axios to return data from pokemom api
	const getPokemon = async () => {
		const toArray = [];
		try {
			//saving url to a variable
			const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
			// just like using fetch from browser but more simple
			const res = await axios.get(url);
			//uses push() to add res data to array
			toArray.push(res.data);
			//gets the type from data in res
			setPokemonType(res.data.types[0].type.name);
			setPokemonData(toArray);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<main>
			{user ? (
				<>
					<NavBar user={user} setUser={setUser} />
					<div className="App">
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
					</div>
				</>
			) : (
				<Register setUser={setUser} />
			)}
		</main>
	);
};

export default App;
