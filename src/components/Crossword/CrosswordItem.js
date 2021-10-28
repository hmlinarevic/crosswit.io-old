import styled from 'styled-components';

const CrosswordItem = props => {
	const id = props.id;
	// const listOfIds = [26, 35, 44, 53, 62];

	// const className = listOfIds.includes(props.id) ? 'colorize' : '';

	return <Item id={props.id}>{props.children}</Item>;
};

export default CrosswordItem;

const Item = styled.li`
	text-align: center;
	padding: 0.25rem;
`;
