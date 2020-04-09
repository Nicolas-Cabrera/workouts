import React, { useEffect, useState } from 'react';

export default function Workouts(props) {

	const [ num, setNum ] = useState(props.location.state.num) 

	useEffect(() => {
		fetch('/rest/workouts') 
			.then(response => response.json())
			.then(res => console.log(res[num]))
	}, []);

	return (
		<div>
			<h2>{props.location.state.muscle}</h2>
			<h2>{num}</h2>
		</div>
	);
}