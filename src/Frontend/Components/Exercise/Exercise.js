import React from 'react';
import './Exercise.css';
import model from '../../img/model.png';

export default function Exercise() {
	return (
		<div>
			<div className='title'>
				<h1>Exercise</h1>
			</div>
			<img className='model' src={model} alt='model' />
		</div>
	);
}