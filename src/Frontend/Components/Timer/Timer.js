import React, { useState, useEffect } from 'react';
import './Timer.css';

export default function Timer() {

	const [ timer, setTimer ] = useState(30);
	const [ isActive, setIsActive ] = useState(false);

	function timerSetter(e) {
		const value = e.target.value;
		setTimer(+value);
	}

	function fiveSetter(e) {
		const five = e.target.value;
		if(five === '-5') {
			setTimer(timer - 5);
		} else if(five === '+5') {
			setTimer(timer + 5);
		}
	}

	function turnToMins(nums) {
		let mins = Math.floor(nums / 60);
		let secs = nums % 60;
		if(secs < 10) {
			return `${mins}:0${secs}`;
		} else {
			return `${mins}:${secs}`;
		}
	}

	function starTimer() {
		setIsActive(!isActive);
	}

	useEffect(() => {
		let interval = null;
		if(isActive) {
			interval = setInterval(() => {
				setTimer(timer => timer - 1);
				if(timer < 2) {
					starTimer();
				}
			}, 1000);
		} else if(!isActive) {
			clearInterval(interval);
		} 
		return () => clearInterval(interval);
	}, [isActive, timer]);

	return (
		<div>
			<div className='title'>
				<h1>Timer</h1>
			</div>
			<div className='main-timer'>
				<div>
					<button className='five-button' value='-5' onClick={(e) => fiveSetter(e)}>-5</button>
				</div>
				<div className='timer-clock'>
					<h1>{turnToMins(timer)}</h1>
				</div>
				<button className='five-button' value='+5' onClick={(e) => fiveSetter(e)}>+5</button>
			</div>
			<div>
			<button className='start-button' onClick={() =>starTimer()}>{
				isActive ? 'Pause' : 'Start'
			}</button>
			</div>
			<div className='grid-container'>
				<button className='num-buttons' value='20' onClick={(e) => timerSetter(e)}>20</button>
				<button className='num-buttons' value='30' onClick={(e) => timerSetter(e)}>30</button>
				<button className='num-buttons' value='45' onClick={(e) => timerSetter(e)}>45</button>
				<button className='num-buttons' value='60' onClick={(e) => timerSetter(e)}>60</button>
				<button className='num-buttons' value='90' onClick={(e) => timerSetter(e)}>90</button>
				<button className='num-buttons' value='120' onClick={(e) => timerSetter(e)}>120</button>
				<button className='num-buttons' value='135' onClick={(e) => timerSetter(e)}>135</button>
				<button className='num-buttons' value='150' onClick={(e) => timerSetter(e)}>150</button>
				<button className='num-buttons' value='180' onClick={(e) => timerSetter(e)}>180</button>
			</div>
			{/* <form method='POST' action='/logout'>
				<input type='submit' value='Logout'></input>
			</form> */}
		</div>
	);
}