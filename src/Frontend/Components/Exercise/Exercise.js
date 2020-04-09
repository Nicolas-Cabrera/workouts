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
				<Link to={{ pathname: '/Workouts', state:{muscle: 'Shoulders'}}} className='link shoulders'>Shoulders</Link>
				<Link to={{ pathname: '/Workouts', state:{muscle: 'Chest'}}} className='link chest'>Chest</Link>
				<Link to={{ pathname: '/Workouts', state:{muscle: 'Forearms'}}} className='link forearms'>Forearms</Link>
				<Link to={{ pathname: '/Workouts', state:{muscle: 'Obliques'}}} className='link obliques'>Obliques</Link>
				<Link to={{ pathname: '/Workouts', state:{muscle: 'Quads'}}} className='link quads'>Quads</Link>
				<Link to={{ pathname: '/Workouts', state:{muscle: 'Cardio'}}} className='link cardio'>Cardio</Link>
				<Link to={{ pathname: '/Workouts', state:{muscle: 'Biceps'}}} className='link biceps'>Biceps</Link>
				<Link to={{ pathname: '/Workouts', state:{muscle: 'Abs'}}} className='link abs'>Abs</Link>
				<Link to={{ pathname: '/Workouts', state:{muscle: 'Abductors'}}} className='link abductors'>Abductors</Link>
				<Link to={{ pathname: '/Workouts', state:{muscle: 'Adductors'}}} className='link adductors'>Adductors</Link>
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
				<Link to={{ pathname: '/Workouts', state:{muscle: 'Traps'}}} className='link traps'>Traps</Link>
				<Link to={{ pathname: '/Workouts', state:{muscle: 'Triceps'}}} className='link triceps'>Triceps</Link>
				<Link to={{ pathname: '/Workouts', state:{muscle: 'Hamstrings'}}} className='link hamstrings'>Hamstrings</Link>
				<Link to={{ pathname: '/Workouts', state:{muscle: 'Calves'}}} className='link calves'>Calves</Link>
				<Link to={{ pathname: '/Workouts', state:{muscle: 'Cardio'}}} className='link cardio'>Cardio</Link>
				<Link to={{ pathname: '/Workouts', state:{muscle: 'Lats'}}} className='link lats'>Lats</Link>
				<Link to={{ pathname: '/Workouts', state:{muscle: 'Lower Back'}}} className='link lower'>Lower Back</Link>
				<Link to={{ pathname: '/Workouts', state:{muscle: 'Glutes'}}} className='link glutes'>Glutes</Link>
				<button onClick={() => swapImage()} className='round' >
					<img src={round} alt='round' />
					<div>180</div>
				</button>
			</div>
		)
	}
}