import React from 'react';
import './Progress.css';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import back from '../../img/back.png';

export default function Progress() {

	const dates = [];
	const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
	const date = new Date();
	const month = date.getMonth();
	const year = date.getFullYear();
	const starts = [];
	const history = useHistory();

	function goBackHandler() {
		history.goBack();
	}

	var getDaysInMonth = function(month, year) {
	   return new Date(year, month, 0).getDate();
	  };

	function getDate() {
		let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Sept', 'Oct', 'Nov', 'Dec'];
		let day = date.getDate();
		return `${day} ${months[month]} ${year}`;
	}

	function startMonthFrom() {
		let firstDay = new Date(2020, month, 1).getDay();
		if(firstDay === 0) {
			firstDay = 7;
		}
		for(let start = 1; start <= firstDay; start ++) {
			starts.push(start);
		}

		for(let date = 1; date <= getDaysInMonth(month, 2020); date ++) {
			dates.push(date);
		}

		const zeros = starts.splice(1).map((a) => a * 0);
		const final = zeros.concat(dates);
		return final.map((a, i) => (
			a === 0 ? 
				<div key={i} className='dates-mapped'></div> : 
					<Link to={{ pathname: '/ProgressHistory', state:{date: a, month: month, year: year }}} 
						key={i} className='dates-mapped'>{a}</Link >
		))
	}

	return (
		<div>
			<div className='calendar-title'>
				<button className='back-button'><img src={back} alt='back' onClick={goBackHandler}/></button>
				<h2>Calendar</h2>
			</div>
			<h2 className='current-date'>{getDate()}</h2>
			<div className='days'>
				{
					days.map((a, i) => <h4 key={i}>{a}</h4>)
				}
			</div>
			<div className='dates'>
				{startMonthFrom()}
			</div>
		</div>
	);
}