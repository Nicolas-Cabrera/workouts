import React, { useState, useEffect } from 'react';

export default function Test() {
	let [test, setTest] = useState();

	useEffect(() => {
		fetch('/rest/movies')
			.then(response => response.json())
			.then(test => setTest(test))
	}, []);

	if(test) {
		console.log(test);
	} 

	return (
		<div>
			<h1>Hello</h1>
			{
				test
			}
		</div>
	)
}