import React, { useState, useEffect } from 'react';
import ListSets from './ListSets';

export default function ListWorkouts() {

	const [weighthistory, setWeightHistory] = useState([]);
	const [rephistory, setRepHistory] = useState([]);
	const [finish, setFinish] = useState(false);
	const [rep, setRep] = useState();
	const [weight, setWeight] = useState();
	const [num, setNum] = useState(1);
	const [exercises, setExercises] = useState();
	const [exerciseOption, setExerciseOption] = useState();
	const [fullWorkout, setFullWorkout] = useState([]);
	const muscle = localStorage.getItem('muscle');

	useEffect(() => {
		fetch('/rest/workouts')
			.then(res => res.json())
			.then(response => {
				let res = response.filter((a) => a[muscle])
				setExercises(res[0][muscle])
			})
	}, [muscle]);

	function handleInput(e, index) {
		if (e && index === 1) {
			setWeight(e.target.value);
		} else if (e && index === 2) {
			setRep(e.target.value);
		}
	}

	function addRep() {
		if (weight && rep) {
			const newWeight = weight;
			const newRep = rep;
			if (newWeight !== '' && newRep !== '') {
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

	function setExercise(e) {
		setExerciseOption(e.target.value);
	}

	function finishSet() {
		if(rephistory.length > 0 && weighthistory.length > 0) {
			setFinish(true);
			const object = 65;//{rephistory, weighthistory, exerciseOption};
			const newSet = [...fullWorkout, object];
			setFullWorkout(newSet);
		}
	}

	if (!finish && exercises) {
		return (
			<div className='section'>
				<form className='select-exercise'>
					<select onChange={(e) => setExercise(e)}>
						{
							exercises.map((a, index) => <option key={index}>{a.name}</option> )
						}
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
				<button onClick={() => finishSet()}>Finish Exercise</button>
			</div >
		);
	} else {
		return (
			<div className='section'>
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
			</div >
		);
	}
}