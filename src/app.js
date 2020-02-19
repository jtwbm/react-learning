import React from 'react';

import Counter from './components/counter.js';

export default function(props) {
	return (
		<section className="example">
			<h2>Counter Example</h2>
			<Counter min={0} max={100} />
		</section>
	);
}