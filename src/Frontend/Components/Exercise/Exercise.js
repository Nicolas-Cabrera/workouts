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
				<Link to={{ pathname: '/Workouts', state:{muscle: 'Shoulders', num: 0 }}} className='link shoulders'>Shoulders</Link>
				<Link to={{ pathname: '/Workouts', state:{muscle: 'Chest',  num: 1 }}} className='link chest'>Chest</Link>
				<Link to={{ pathname: '/Workouts', state:{muscle: 'Forearms',  num: 2 }}} className='link forearms'>Forearms</Link>
				<Link to={{ pathname: '/Workouts', state:{muscle: 'Obliques',  num: 3 }}} className='link obliques'>Obliques</Link>
				<Link to={{ pathname: '/Workouts', state:{muscle: 'Quads',  num: 4 }}} className='link quads'>Quads</Link>
				<Link to={{ pathname: '/Workouts', state:{muscle: 'Cardio',  num: 5 }}} className='link cardio'>Cardio</Link>
				<Link to={{ pathname: '/Workouts', state:{muscle: 'Biceps',  num: 6 }}} className='link biceps'>Biceps</Link>
				<Link to={{ pathname: '/Workouts', state:{muscle: 'Abs',  num: 7 }}} className='link abs'>Abs</Link>
				<Link to={{ pathname: '/Workouts', state:{muscle: 'Abductors',  num: 8 }}} className='link abductors'>Abductors</Link>
				<Link to={{ pathname: '/Workouts', state:{muscle: 'Adductors',  num: 9 }}} className='link adductors'>Adductors</Link>
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
				<Link to={{ pathname: '/Workouts', state:{muscle: 'Traps',  num: 10 }}} className='link traps'>Traps</Link>
				<Link to={{ pathname: '/Workouts', state:{muscle: 'Triceps',  num: 11 }}} className='link triceps'>Triceps</Link>
				<Link to={{ pathname: '/Workouts', state:{muscle: 'Hamstrings',  num: 12 }}} className='link hamstrings'>Hamstrings</Link>
				<Link to={{ pathname: '/Workouts', state:{muscle: 'Calves',  num: 13 }}} className='link calves'>Calves</Link>
				<Link to={{ pathname: '/Workouts', state:{muscle: 'Cardio',  num: 5 }}} className='link cardio'>Cardio</Link>
				<Link to={{ pathname: '/Workouts', state:{muscle: 'Lats',  num: 14 }}} className='link lats'>Lats</Link>
				<Link to={{ pathname: '/Workouts', state:{muscle: 'Lower Back',  num: 15 }}} className='link lower'>Lower Back</Link>
				<Link to={{ pathname: '/Workouts', state:{muscle: 'Glutes',  num: 16 }}} className='link glutes'>Glutes</Link>
				<button onClick={() => swapImage()} className='round' >
					<img src={round} alt='round' />
					<div>180</div>
				</button>
			</div>
		)
	}
}