import React, { useState } from 'react';
import back from '../../img/back.png';
import './Muscle.css';
import { useParams, useHistory, Link } from 'react-router';

export default function Muscle() {

	const id = useParams();
	const  history = useHistory();

	console.log(id);

	function goBackHandler() {
		history.goBack();
	}

	return (
		<div>
			<div className='top-bit'>
				<button className='back-history-button'><img src={back} alt='back' onClick={goBackHandler}/></button>
			</div>
		</div>
	)
}