import PokemonList from '../../components/PokemonList/PokemonList';
const Dashboard = ({
	pokemon,
	pokemonType,
	pokemonData,
	setPokemon,
	getPokemon,
}) => {
	return (
		<div className="row">
			<div className="col">
				<PokemonList />
			</div>
		</div>
	);
};
export default Dashboard;
