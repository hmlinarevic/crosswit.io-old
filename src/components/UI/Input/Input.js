import React from 'react';

const Input = React.forwardRef((props, ref) => {
	return (
		<input
			ref={ref}
			className={props.className}
			type={props.type}
			placeholder={props.placeholder}
			value={props.value}
			onChange={props.onChange}
		/>
	);
});

export default Input;
