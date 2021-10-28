import styled from 'styled-components';

import CrosswordItem from './CrosswordItem';

import { getPuzzleSize } from '../../helpers/getPuzzleSize';

const CrosswordBoard = props => {
	const size = getPuzzleSize(props.puzzle);
	const template = `repeat(${size}, 1fr)`;

	const items = (
		<ul style={{ gridTemplateColumns: `${template}` }}>
			{props.puzzle.split('').map((letter, i) => (
				<CrosswordItem key={i + letter} id={i}>
					{letter}
				</CrosswordItem>
			))}
		</ul>
	);

	return <Board>{items}</Board>;
};

export default CrosswordBoard;

const Board = styled.div`
	ul {
		display: grid;
		grid-template-rows: auto;
		gap: 1rem 1rem;
	}
`;
