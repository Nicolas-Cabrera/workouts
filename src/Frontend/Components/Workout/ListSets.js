import React from 'react';
import './Workout.css';

export default function ListSets(props) {
	const weight = props.weight;
	const rep = props.rep;
	const obj = [{"Weight":weight, "Reps":rep}];
	const listWeight = weight.map((item, index) => {
		return <div className='list' key={index}>
			<span className='set'>{index + 1}</span> <span className='weight'>{item}</span>
		</div>
	})

	const listRep = rep.map((item, index) => {
		return <div className='list' key={index}>
			<span>{item}</span>
		</div>
	})

	console.log(obj);

	return <div className='history'>
		<div>{listWeight}</div>
		<div>{listRep}</div>
	</div>
}