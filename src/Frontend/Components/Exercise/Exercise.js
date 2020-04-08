import React from 'react';
import './Exercise.css';
import { Link } from 'react-router-dom';
import round from '../../img/round.png';

export default function Exercise() {
	return (
		<div className='exercise-tab'>
			<div className='title'>
				<h1>Exercise</h1>
			</div>
			<Link to='/' className='link shoulders'>Shoulders</Link>
			<Link to='/' className='link chest'>Chest</Link>
			<Link to='/' className='link forearms'>Forearms</Link>
			<Link to='/' className='link obliques'>Obliques</Link>
			<Link to='/' className='link quads'>Quads</Link>
			<Link to='/' className='link cardio'>Cardio</Link>
			<Link to='/' className='link biceps'>Biceps</Link>
			<Link to='/' className='link abs'>Abs</Link>
			<Link to='/' className='link abductors'>Abductors</Link>
			<Link to='/' className='link adductors'>Adductors</Link>
			<button className='round' value='180' >
				{/* <img src={round} alt='round' /> */}
			</button>
		</div>
	);
}