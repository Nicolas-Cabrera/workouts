import React from 'react';
import { useHistory } from 'react-router';
import back from '../../img/back.png';

export default function ProgressHistory(props) {

	const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Sept', 'Oct', 'Nov', 'Dec'];
	const history = useHistory();
	const date = props.location.state.date;
	const month = props.location.state.month;
	const year = props.location.state.year;

	function goBackHandler() {
		history.goBack();
	}

	return (
		<div>
			<div className='calendar-title'>
				<button className='back-button'><img src={back} alt='back' onClick={goBackHandler}/></button>
				<h2>Progress History</h2>
			</div>
			<h3>{date} {months[month]} {year}</h3>
		</div>
	);
}