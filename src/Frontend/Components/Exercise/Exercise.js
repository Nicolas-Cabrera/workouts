import React from 'react';
import './Exercise.css';
import model from '../../img/model.png';

export default function Exercise() {
	return (
		<div className='exercise-tab'>
			<div className='title'>
				<h1>Exercise</h1>
			</div>
			{/* <img className='model' src={model} alt='model' /> */}
			{/* <ul className='muscles'>
				<li>Shoulder</li>
				<li>Chest</li>
				<li>Forearms</li>
				<li>Obliques</li>
				<li>Quads</li>
			</ul> */}
		</div>
	);
}