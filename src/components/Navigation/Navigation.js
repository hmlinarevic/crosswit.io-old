import styled from 'styled-components';

import { makeBoardData } from '../../helpers/makeBoardData';

import moonLogo from '../../assets/moon.svg';
import sunLogo from '../../assets/sun.svg';

const puzzle = 'FHKEFFHDFEOGIOPVFLDKOIAQF';

const data = makeBoardData(puzzle);

const logo = data.map(row => (
	<div className="logo-row">
		{row.map(letter => (
			<span className="logo-letter">{letter}</span>
		))}
	</div>
));

const Navigation = () => {
	return (
		<StyledNav>
			<div className="nav-inner">
				<div className="logo">
					<div className="logo-letters">{logo}</div>
					<span className="logo-text">Crossword Puzzle</span>
				</div>
				<div className="nav-other">
					<span className>new game</span>
					<span>words left: 2</span>
					<img src={moonLogo} alt="moon" />
				</div>
			</div>
		</StyledNav>
	);
};

export default Navigation;

const StyledNav = styled.nav`
	border-top: 1px solid #e0e0e0;
	border-bottom: 1px solid #e0e0e0;
	margin-bottom: 4rem;

	.nav-inner {
		/* max-width: 1200px; */
		padding: 1rem 6rem;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.nav-other {
		display: flex;
		align-items: center;
	}

	.nav-other span {
		margin-right: 2rem;
		color: #a3a3a3;
	}

	.logo {
		display: flex;
		align-items: center;
		font-family: 'Times New Roman';
	}

	.logo-letters {
		width: 80px;
		/* height: 80px; */
		font-size: 4px;
	}

	.logo-row {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		justify-items: center;
		margin-bottom: 6px;
	}

	.logo-row:last-child {
		margin-bottom: 0;
	}

	.logo-text {
		font-family: 'Architects Daughter', cursive;
		font-size: 2.2rem;
		margin-left: 1rem;
	}
`;
