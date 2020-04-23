import React, { useState, useEffect } from 'react';
import Loading from '../Loading/Loading';
import './Workout.css';

export default function Workout() {

	const [ show, setShow ] = useState(true);
	const [ workouts, setWorkouts ] = useState();
	const [ muscle, setMuscle ] = useState();
	const [ fullWorkout, setFullWorkout ] = useState([]);
	const [ reps, setReps ] = useState({weight: '', reps: ''});

	useEffect(() => {
		fetch('/rest/workouts')
			.then(res => res.json())
			.then(response => {
				setWorkouts(response.map((a) => Object.keys(a)))
			});
	}, []);

	function showHide() {
		setShow(!show);
	}

	function getDate() {
		let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Sept', 'Oct', 'Nov', 'Dec'];
		let date = new Date();
		let day = date.getDate();
		let month = date.getMonth();
		let year = date.getFullYear();
		return `${day} ${months[month]} ${year}`;
	}

	function setMuscleGroup(e) {
		setMuscle(e.target.value);
	}

	function handleInput(weight, rep) {
		//setReps({weight: '56', reps: '45'});
		console.log('weight is: ', weight.target.value);
		console.log('Reps is: ', rep.target.value);
	}

	function addRep() {
		//console.log(reps);
	}


	if (show && workouts) {
		return (
			<div>
				<div className='title'>
					<h1>Record Workout</h1>
				</div>
				<div className='workout-section'>
					<form className='select-muscle'>
						<label>Select Muscle Group</label>
						<select onChange={(e) => setMuscleGroup(e)}>
							{
								workouts.map((a) => <option key={a}>{a[0]}</option>)
							}
						</select>
					</form>
					<div>
						<h2 className='intro'>Stretch and warm up before starting, remember you can't train if you are injured...</h2>
						<button className='start-button' onClick={() => showHide()}>START</button>
					</div>
				</div>
			</div>
		);
	} else if(!show) {
		return (
			<div>
				<div className='title'>
					<h1>Record Workout</h1>
				</div>
				<div className='workout-section'>
					<div className='workout-block'>
						<div className='workouts-top'>
							<h2 className='selected-muscle'>{muscle}</h2>
							<h6 className='date'>{getDate()}</h6>
						</div>
						<form className='select-exercise'>
							<select>
								<option>test</option>
							</select>
						</form>
						<div className='headers'>
							<h4 className='header-item'>SET</h4>
							<h4 className='header-item'>WEIGHT(kg)</h4>
							<h4 className='header-item-reps'>REPS</h4>
						</div>
						<div>
							<form className='sets'>
								<label className='sets-item'>1</label>
								<input type='number' className='sets-item' onChange={(weight) => handleInput(weight)}></input>
								<input type='number' className='sets-item' onChange={(rep) => handleInput(rep)}></input>
							</form>
						</div>
						<button onClick={() => addRep()}>Add new set</button>
					</div>
					<button>Add New Exercise</button>
					<button>Finish Workout</button>
				</div>
			</div>
		);
	} else {
		return <Loading />
	}
}