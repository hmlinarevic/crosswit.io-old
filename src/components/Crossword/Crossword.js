import { useState } from 'react';

import CrosswordBoard from './CrosswordBoard';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';

import { makeBoardData } from '../../helpers/makeBoardData';

const Crossword = () => {
	const [inputValue, setInputValue] = useState('');
	const words = ['HELLO', 'WORLD'];
	const puzzle =
		'FHKEFFHDFEOGIOPVFLDKOIAQFLWIHQRMUOTOXNRIAAESRUOFCUHHELTUFJJSNJDO';

	const data = makeBoardData(puzzle);

	const handleSubmit = e => {
		e.preventDefault();
		setInputValue('');
	};

	const onInputChange = e => {
		console.log('hello', e.target.value);
		setInputValue(e.target.value);
	};

	return (
		<div className="crossword">
			<div className="crossword-board">
				<CrosswordBoard data={data} />
			</div>
			<form className="crossword-form" onSubmit={handleSubmit}>
				<Input
					className="crossword-input"
					type="text"
					placeholder="type here"
					value={inputValue}
					onChange={onInputChange}
				/>
				<Button className="crossword-button" type="submit">
					find
				</Button>
			</form>
		</div>
	);
};

export default Crossword;
