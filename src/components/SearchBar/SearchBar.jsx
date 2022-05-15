import PokemonCardSearch from '../PokemonCardSearch/PokemonCardSearch';
const SearchBar = ({
	setPokemon,
	getPokemon,
	pokemonType,
	pokemonData,
	key,
}) => {
	// this function takes in the submit change evt and takes that input value then changes
	//it to lower case because thats what the Pokemon API requires
	const handleChange = (evt) => {
		setPokemon(evt.target.value.toLowerCase());
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();
		getPokemon();
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label>
					<input
						type="text"
						onChange={handleChange}
						placeholder="Search for a Pokemon"
					/>
				</label>
				<button>Get Pokemon</button>
			</form>
			<PokemonCardSearch pokemonType={pokemonType} pokemonData={pokemonData} />
		</div>
	);
};

export default SearchBar;
