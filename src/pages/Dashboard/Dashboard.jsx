import PokemonCard from '../../components/PokemonCard/PokemonCard';
import SearchBar from '../../components/SearchBar/SearchBar';
const Dashboard = ({
	pokemon,
	pokemonType,
	pokemonData,
	setPokemon,
	getPokemon,
}) => {
	return (
		<div>
			<h1>Pokedex</h1>
			<div className="App">
				<SearchBar
					pokemon={pokemon}
					setPokemon={setPokemon}
					getPokemon={getPokemon}
					pokemonType={pokemonType}
					pokemonData={pokemonData}
				/>
			</div>
		</div>
	);
};
export default Dashboard;
