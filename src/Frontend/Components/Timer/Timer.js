import React, { useState, useEffect } from 'react';
import './Timer.css';

export default function Timer() {

	const [ timer, setTimer ] = useState(30);

	// useEffect(() => {
	// 	setTimeout(() => {
	// 		setTimer(timer - 1);
	// 	}, 1000);
	// })

	return (
		<div>
			<div className='title'>
				<h1>Timer</h1>
			</div>
			<div className='main-timer'>
				<div>
					<button className='five-button'>-5</button>
				</div>
				<div className='timer-clock'>
					<h1>00:30</h1>
				</div>
				<div>
					<button className='five-button'>+5</button>
				</div>
			</div>
			<p>Time is: {timer}</p>
		</div>
	);
}