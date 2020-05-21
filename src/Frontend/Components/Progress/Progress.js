import React, { useState } from 'react';
import './Progress.css';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import back from '../../img/back.png';
import leftarrow from '../../img/leftarrow.png';
import rightarrow from '../../img/rightarrow.png';

export default function Progress() {

	const dates = [];
	const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
	const date = new Date();
	const day = date.getDate();
	const [ month, setMonth ] = useState(date.getMonth());
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
						key={i} className={a === day ? 'dates-mapped current' : 'dates-mapped'}>{a}</Link >
		))
	}

	function setMonthCalendar(e, dir) {
		if(dir === 'left') {
			setMonth(month - 1);
		} else {
			setMonth(month + 1);
		}
	}

	return (
		<div>
			<div className='calendar-title'>
				<button className='back-button'><img src={back} alt='back' onClick={goBackHandler}/></button>
				<h2>Calendar</h2>
			</div>
			<div className='date-arrows'>
				<button><img src={leftarrow} alt='back' onClick={(e) => setMonthCalendar(e, 'left')} /></button>
				<h2 className='current-date'>{getDate()}</h2>
				<button><img src={rightarrow} alt='back' onClick={(e) => setMonthCalendar(e, 'right')} /></button>
			</div>
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