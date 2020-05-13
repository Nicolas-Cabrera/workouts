import React from 'react';
import { useHistory } from 'react-router';
import back from '../../img/back.png';

export default function ProgressHistory() {

	const history = useHistory();

	function goBackHandler() {
		history.goBack();
	}

	return (
		<div>
			<div className='calendar-title'>
				<button className='back-button'><img src={back} alt='back' onClick={goBackHandler}/></button>
				<h2>Progress History</h2>
			</div>
			<h3>Check your history progress</h3>
		</div>
	);
}