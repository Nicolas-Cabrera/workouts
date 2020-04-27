import React from 'react';
import './Workout.css';

export default function ListSets(props) {
	const sets = props.sets;
	console.log(sets);
	const listSets = sets.map((item, index) => {
		return <div className='list' key={index}>
			<span className='header-item'>{index + 1}</span> <span>{item}</span>
		</div>
	})

	return <div>{listSets}</div>
}