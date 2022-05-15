const PokemonCardSearch = ({ pokemonData, pokemonType }) => {
	return (
		<>
			{pokemonData.map((data, i) => {
				return (
					<div className="col-md-3 col-sm-6 mb-5">
						<img src={data.sprites['front_default']} />
						<div className="pokeTable">
							<div className="pokeTableBody"></div>
							<div className="divTableRow">
								<div className="divTableCell">Type</div>
								<div className="divTableCell">{pokemonType}</div>
								<div className="divTableCell">{data.moves[0].move.name}</div>
							</div>
							<div className="divTableRow">
								<div className="divTableCell">Height</div>
								<div className="divTableCell">
									{data.height}
									{'ft'}
								</div>
							</div>
							<div className="divTableRow">
								<div className="divTableCell">Weight</div>
								<div className="divTableCell">
									{data.weight}
									{'ibs'}
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
