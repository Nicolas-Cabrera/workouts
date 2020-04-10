import React, { useEffect, useState } from 'react';
import './Exercise.css';	
import { Link } from 'react-router-dom';
import back from '../../img/back.png';

export default function Workouts(props) {

	const [num, setNum] = useState(props.location.state.num)

	useEffect(() => {
		fetch('/rest/workouts')
			.then(response => response.json())
			.then(res => console.log(res[num]))
	}, []);

	return (
		<div>
			<div className='title'>
				<Link to='/Main' ><img className='back' src={back} alt='back' /></Link>
				<h1>{props.location.state.muscle}</h1>
			</div>
			<div>
				
			</div>
		</div>
	);
}