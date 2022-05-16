const Pagination = ({ prev, next }) => {
	return (
		<div>
			<button className="btn btn-primary btn-lg btn-block pbtn" onClick={prev}>
				Previous
			</button>
			<button className="btn btn-primary btn-lg btn-block pbtn" onClick={next}>
				Next
			</button>
		</div>
	);
};

export default Pagination;
