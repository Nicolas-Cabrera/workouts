import React, { useState } from 'react';
import './Workout.css';

export default function Workout() {

	const [ show, setShow ] = useState(true);

	function showHide() {
		setShow(!show);
	}

	if(show) {
		return (
			<div>
				<div className='title'>
					<h1>Record Workout</h1>
				</div>
				<div className='workout-section'>
					<div>
						<h2 className='intro'>Stretch and warm up before starting, remember you can't train if you are injured...</h2>
						<button className='start-button' onClick={() => showHide()}>START</button>
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div>
				<div className='title'>
					<h1>Record Workout</h1>
				</div>
				<div className='workout-section'>
					<div className='workout-block'>
						<div className='workouts-top'>
							<form className='select-muscle'>
								<select>
									<option>Bench Press</option>
									<option>Cable Fly</option>
									<option>Dips</option>
								</select>
							</form>
							<h6 className='date'>22nd April 2020</h6>
						</div>
						<div className='headers'>
							<h4 className='header-item'>SET</h4>
							<h4 className='header-item'>WEIGHT(kg)</h4>
							<h4 className='header-item'>REPS</h4>
						</div>
						<div className='sets'>
							<h4 className='sets-item'>1</h4>
							<h4 className='sets-item'>55</h4>
							<h4 className='sets-item'>10</h4>
						</div>
						<button>Add new set</button>
					</div>
					<button>Add New Exercise</button>
					<button>Finish Workout</button>
				</div>
			</div>
		);
	}
}