import React, { useEffect, useState } from 'react';
import './Exercise.css';	
import { Link } from 'react-router-dom';
import back from '../../img/back.png';

export default function Workouts(props) {

	const [ num ] = useState(props.location.state.num)
	const [ muscle ] = useState(props.location.state.muscle)
	const [ workouts, setWorkouts ] = useState();

	useEffect(() => {
		fetch('/rest/workouts')
			.then(response => response.json())
			.then(res => {
				console.log(res[num][muscle]);
				setWorkouts(res[num][muscle]);
			})
	}, []);

	return (
		<div>
			<div className='title'>
				<Link to='/Main' ><img className='back' src={back} alt='back' /></Link>
				<h1>{props.location.state.muscle}</h1>
			</div>
			<div className='grid-workouts'>
				{
					workouts ? workouts.map((a) => <h4 className='grid-item'>{a.name}</h4>) : null
				}
			</div>
		</div>
	);
}