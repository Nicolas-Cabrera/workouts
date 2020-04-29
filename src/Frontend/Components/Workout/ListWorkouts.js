import React, { useState } from 'react';
import ListSets from './ListSets';

export default function ListWorkouts() {

	const [ weighthistory, setWeightHistory ]  = useState([]);
	const [ rephistory, setRepHistory ]  = useState([]);
	const [ fullWorkout, setFullWorkout ] = useState([]);
	const [ rep, setRep ] = useState();
	const [ weight,setWeight ] = useState();
	const [ num, setNum ] = useState(1);

	function handleInput(e, index) {
		if(e && index === 1) {
			setWeight(e.target.value);
		} else if(e && index === 2) {
			setRep(e.target.value);
		}
	}

	function addRep() {
		if(weight && rep) {
			const newWeight = weight;
			const newRep = rep;
			if(newWeight !== '' && newRep !== '') {
				const newWeights = [...weighthistory, newWeight];
				const newReps = [...rephistory, newRep];
				setWeightHistory(newWeights);
				setRepHistory(newReps);
				setWeight('');
				setRep('');
				setNum(num + 1);
			}
		}
	}

	return (
		<div>
			<form className='select-exercise'>
				<select>
					<option>test for muscle workout</option>
				</select>
			</form>
			<div className='headers'>
				<h4 className='header-item'>SET</h4>
				<h4 className='header-item'>WEIGHT(kg)</h4>
				<h4 className='header-item-reps'>REPS</h4>
			</div>
			<ListSets weight={weighthistory} rep={rephistory} />
			<div>
				<form className='sets'>
					<label className='sets-item'>{num}</label>
					<input type='number' className='sets-item' value={weight} onChange={(e) => handleInput(e, 1)} ></input>
					<input type='number' className='sets-item' value={rep} onChange={(e) => handleInput(e, 2)} ></input>
				</form>
			</div>
			<button onClick={() => addRep()}>Add new set</button>
		</div >
	);
}