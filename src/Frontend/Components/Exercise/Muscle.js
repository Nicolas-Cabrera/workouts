import React, { useState, useEffect } from 'react';
import back from '../../img/back.png';
import './Muscle.css';
import { useParams, useHistory } from 'react-router';

export default function Muscle(props) {

	const id = useParams();
	const  history = useHistory();
	const [ prop, setProp ] = useState();

	function goBackHandler() {
		history.goBack();
	}

	useEffect(() => {
		setProp(props.location.state);
		console.log('array is ', prop);
	});

	return (
		<div>
			<div className='top-bit'>
				<button className='back-history-button'><img src={back} alt='back' onClick={goBackHandler}/></button>
			</div>
		</div>
	);
}