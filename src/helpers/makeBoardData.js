export const makeBoardData = puzzle => {
	const puzzleSize = Math.sqrt(puzzle.length);

	const data = [];
	let key = 0;

	for (let i = 0; i < puzzleSize; ++i) {
		const row = [];
		for (let j = 0; j < puzzleSize; ++j) {
			row.push(puzzle[key]);
			++key;
		}
		data.push(row);
	}
	return data;
};
