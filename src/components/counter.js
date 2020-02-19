import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Counter(props) {
	const [count, setCount] = useState(props.min);

	function changeCount(val) {
		if(isNaN(Number(val))) throw new Error('Некорректное значение поля');

		if(Number(val) < props.min) return setCount(props.min);
		if(Number(val) > props.max) return setCount(props.max);

		setCount(Number(val));
	}

	return (
		<div className="counter">
			<button className="counter__button" onClick={() => changeCount(count - 1)}>-</button>
			<input className="counter__input" value={count} onChange={(e) => changeCount(e.target.value)} />
			<button className="counter__button" onClick={() => changeCount(count + 1)}>+</button>
		</div>
	);
}

Counter.defaultProps = {
	min: 0,
	max: 10
};

Counter.propTypes = {
	min: PropTypes.number,
	max: PropTypes.number
};

export default Counter;