import React from 'react';
import './Workout.css';

export default function ListSets(props) {

	const sets = props.sets;

	const listSets = sets.map((item, index) => {
		return <div className='list' key={index}>
			<p>{item}</p>
		</div>
	})

	return <div  className='sets-item'>{listSets}</div>
}