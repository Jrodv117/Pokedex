import typeColors from '../../utilities/colorTypes';
const PokemonCardSearch = ({ pokemonData, pokemonType }) => {
	return (
		<>
			{pokemonData.map((pokemon, i) => {
				return (
					<div className="pcard">
						<div className="col-md-3 col-sm-6 mb-5">
							<div className="card">
								<h1 className="card-header">{pokemon.id}</h1>
								<div className="card-img-top rounded mt-1">
									<img src={pokemon.sprites['front_default']} />
								</div>
								<div className="card-body">
									<h5>{pokemon.name}</h5>
									<div>
										{pokemon.types.map((type) => {
											return (
												<div
													className="type"
													style={{
														backgroundColor: typeColors[type.type.name],
													}}
												>
													{type.type.name}
												</div>
											);
										})}
										<div className="card-header abilities">
											<p className="card-text">Ability:</p>
											{pokemon.abilities[0].ability.name}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
};

export default PokemonCardSearch;
