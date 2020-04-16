import React, { useState, useEffect } from 'react';
import back from '../../img/back.png';
import './Muscle.css';
import { useHistory } from 'react-router';

export default function Muscle(props) {

	const  history = useHistory();
	const [ arr, setArr ] = useState();
	const [ exercise, setExercise ] = useState();

	function goBackHandler() {
		history.goBack();
	}

	useEffect(() => {
		setArr(props.location.state.array);
		setExercise(props.location.state.muscle);
		if(arr) {
			setExercise(arr.map(a => a).find(a => a.url === exercise));
		}
	}, [arr]);

	if(exercise) {
		console.log(exercise.image);
	} 

	if(exercise) {
		return (
			<div>
				<div className='top-bit'>
					<button className='back-history-button'><img src={back} alt='back' onClick={goBackHandler}/></button>
				</div>
				<div>
					<h2>{exercise.name}</h2>
					{ exercise.image ? <img className='images-muscle-page' src={require(`../../img/Workouts/${exercise.image}.png`)} alt='images' /> : <h2></h2> }
				</div>
			</div>
		);
	} else {
		return <h2></h2>
	}
}