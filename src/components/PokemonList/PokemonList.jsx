import { useEffect, useState } from 'react';
import { getAllPokemon, getPokemon } from '../../utilities/pokemon';
import PokemonCard from '../PokemonCard/PokemonCard';
const PokemonList = () => {
	const [allPokemon, setallPokemonData] = useState([]);
	const [currentUrl, setCurrentUrl] = useState();
	const [nextUrl, setNextUrl] = useState('');
	const [prevUrl, setPrevUrl] = useState('');
	const [loading, setLoading] = useState('');
	const url = `https://pokeapi.co/api/v2/pokemon/`;

	useEffect(() => {
		async function fetchData() {
			let response = await getAllPokemon(url);
			setNextUrl(response.next);
			setPrevUrl(response.previous);
			let rest = await loadingPokemon(response.results);
			console.log(rest);
			setLoading(false);
		}
		fetchData();
	}, []);

	const loadingPokemon = async (data) => {
		let _pokemon = await Promise.all(
			data.map(async (pokemon) => {
				let pokemonRecord = await getPokemon(pokemon.url);
				return pokemonRecord;
			})
		);
		setallPokemonData(_pokemon);
	};
	console.log(allPokemon);

	return (
		<div>
			{loading ? (
				<h1>loading...</h1>
			) : (
				<>
					<div className="row">
						{allPokemon.map((pokemon, i) => {
							return <PokemonCard key={i} pokemon={pokemon} />;
						})}
					</div>
				</>
			)}
		</div>
	);
};

export default PokemonList;
