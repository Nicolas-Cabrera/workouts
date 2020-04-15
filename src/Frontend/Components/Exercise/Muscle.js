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
			let exer = arr.map(a => a).find(a => a.url === exercise);
			console.log('Exercise is: ', exer);
		}
	}, [arr, exercise]);

	return (
		<div>
			<div className='top-bit'>
				<button className='back-history-button'><img src={back} alt='back' onClick={goBackHandler}/></button>
			</div>
		</div>
	);
}