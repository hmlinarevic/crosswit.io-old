const CrosswordBoard = props => {
	const board = props.data.map(row => (
		<div className="row">
			{row.map(letter => (
				<span className="letter">{letter}</span>
			))}
		</div>
	));
	return <>{board}</>;
};

export default CrosswordBoard;
