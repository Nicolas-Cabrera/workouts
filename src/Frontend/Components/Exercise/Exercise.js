import React, { useState } from 'react';
import './Exercise.css';
import { Link } from 'react-router-dom';
import round from '../../img/round.png';

export default function Exercise() {

	const [ side, setSide ] = useState(true);
	const [ image, setImage ] = useState('exercise-front');

	function swapImage() {
		setSide(!side);
		if(side) {
			setImage('exercise-back');
		} else {
			setImage('exercise-front');
		}
	}

	if (side) {
		return (
			<div className={image}>
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
				<button onClick={() => swapImage()} className='round' >
					<img src={round} alt='round' />
					<div>180</div>
				</button>
			</div>
		);
	} else {
		return (
			<div className={image}>
				<div className='title'>
					<h1>Exercise</h1>
				</div>
				<Link to='/' className='link traps'>Traps</Link>
				<Link to='/' className='link triceps'>Triceps</Link>
				<Link to='/' className='link hamstrings'>Hamstrings</Link>
				<Link to='/' className='link calves'>Calves</Link>
				<Link to='/' className='link cardio'>Cardio</Link>
				<Link to='/' className='link lats'>Lats</Link>
				<Link to='/' className='link lower'>Lower Back</Link>
				<Link to='/' className='link glutes'>Glutes</Link>
				<button onClick={() => swapImage()} className='round' >
					<img src={round} alt='round' />
					<div>180</div>
				</button>
			</div>
		)
	}
}