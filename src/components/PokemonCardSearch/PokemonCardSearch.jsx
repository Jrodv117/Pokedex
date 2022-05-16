const PokemonCardSearch = ({ pokemonData, pokemonType }) => {
	return (
		<>
			{pokemonData.map((data, i) => {
				return (
					<div className="pcard">
						<div className="col-md-3 col-sm-6 mb-5 PokemonCardSearch">
							<div className="card">
								<h1 className="card-header">{data.id}</h1>
								<div className="card-img-top rounded mt-1">
									<img src={data.sprites['front_default']} />
								</div>
								<div className="card-body">
									<h5>{data.name}</h5>
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
