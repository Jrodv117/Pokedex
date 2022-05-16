import PokemonList from '../../components/PokemonList/PokemonList';
import SearchBar from '../../components/SearchBar/SearchBar';
const Dashboard = ({
	pokemon,
	pokemonType,
	pokemonData,
	setPokemon,
	getPokemon,
}) => {
	return (
		<div className="dash">
			<div className="row">
				<div className="col">
					<SearchBar
						pokemon={pokemon}
						setPokemon={setPokemon}
						getPokemon={getPokemon}
						pokemonType={pokemonType}
						pokemonData={pokemonData}
					/>
					<PokemonList />
				</div>
			</div>
		</div>
	);
};
export default Dashboard;
