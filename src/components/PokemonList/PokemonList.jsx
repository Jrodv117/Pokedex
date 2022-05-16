import { useEffect, useState } from 'react';
import { getAllPokemon, getPokemon } from '../../utilities/pokemon';
import Pagination from '../Pagination/Pagination';
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
			setLoading(false);
		}
		fetchData();
	}, []);

	const next = async () => {
		setLoading(true);
		let data = await getAllPokemon(nextUrl);
		await loadingPokemon(data.results);
		setNextUrl(data.next);
		setPrevUrl(data.previous);
		setLoading(false);
	};

	const prev = async () => {
		if (!prevUrl) return;
		setLoading(true);
		let data = await getAllPokemon(prevUrl);
		await loadingPokemon(data.results);
		setNextUrl(data.next);
		setPrevUrl(data.previous);
		setLoading(false);
	};

	const loadingPokemon = async (data) => {
		let _pokemon = await Promise.all(
			data.map(async (pokemon) => {
				let pokemonRecord = await getPokemon(pokemon.url);
				console.log(pokemonRecord);
				return pokemonRecord;
			})
		);
		setallPokemonData(_pokemon);
	};

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
						<Pagination prev={prev} next={next} />
					</div>
				</>
			)}
		</div>
	);
};

export default PokemonList;
