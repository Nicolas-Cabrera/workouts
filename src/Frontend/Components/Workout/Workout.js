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
					<div>
						<h2 className='intro'>Ready to start</h2>
					</div>
				</div>
			</div>
		);
	}
}