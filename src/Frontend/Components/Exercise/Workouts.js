import React, { useEffect, useState } from 'react';
import './Exercise.css';	
import { Link } from 'react-router-dom';
import back from '../../img/back.png';

export default function Workouts(props) {

	const [ num ] = useState(props.location.state.num);
	const [ muscle ] = useState(props.location.state.muscle);
	const [ workouts, setWorkouts ] = useState();

	//TO DO:
	//When click on any muscle direct to the right muscle group page

	useEffect(() => {
		fetch('/rest/workouts')
			.then(response => response.json())
			.then(res => {
				setWorkouts(res[num][muscle]);
				console.log(res[num]);
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
					workouts ? workouts.map((a, i) => <div key={i} className='grid-item'><h5><img className='workout-image' src={require(`../../img/Workouts/${a.image}.png`)} alt='img' />{a.name}</h5></div>) : null
				}
			</div> 
		</div>
	);
}