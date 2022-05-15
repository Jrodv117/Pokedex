const PokemonCard = ({ pokemon }) => {
	return (
		<div className="col-md-3 col-sm-6 mb-5">
			<div className="card">
				<h1 className="card-header">{pokemon.id}</h1>
				<div className="card-img-top rounded mt-1">
					<img src={pokemon.sprites['front_default']} />
				</div>
				<div className="card-body">
					<h5>{pokemon.name}</h5>
				</div>
			</div>
		</div>
	);
};
export default PokemonCard;
