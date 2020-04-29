import React, { useState, useEffect } from 'react';
import Loading from '../Loading/Loading';
import ListWorkouts from './ListWorkouts';
import './Workout.css';

export default function Workout() {

	const [ show, setShow ] = useState(true);
	const [ workouts, setWorkouts ] = useState();
	const [ muscle, setMuscle ] = useState();

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
						<ListWorkouts />
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