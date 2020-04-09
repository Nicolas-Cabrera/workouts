import React from 'react';

export default function Workouts(props) {

	console.log('props is: ', props);

	return (
		<div>
			<h2>{props.location.state.muscle}</h2>
		</div>
	);
}