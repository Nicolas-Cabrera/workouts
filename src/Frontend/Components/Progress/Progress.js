import React, { useState } from 'react';
import './Progress.css';

export default function Progress() {

	const dates = [];
	const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
	const date = new Date();
	const month = date.getMonth();
	const starts = [];
	const [ finalMonth, setFinalMonth ] = useState([]);

	var getDaysInMonth = function(month,year) {
	   return new Date(year, month, 0).getDate();
	  };

	function getDate() {
		let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Sept', 'Oct', 'Nov', 'Dec'];
		let day = date.getDate();
		let year = date.getFullYear();
		return `${day} ${months[month]} ${year}`;
	}

	function setMonth() {
		let firstDay = new Date(2020, month, 1).getDay();
		for(let start = 1; start <= firstDay; start ++) {
			starts.push(start);
		}
		const zeros = starts.map((a) => a * 0);

		for(let date = 1; date <= getDaysInMonth(month, 2020); date ++) {
			dates.push(date);
		}
		const final = zeros.concat(dates);
		// setFinalMonth(final);
	}

	function startMonthFrom() {
		setMonth();
		// setDates(zeros.concat(dates));
		//return dates.map((a, i) => <div key={i}>{a}</div>)
		return <div>Test</div>	
	}

	return (
		<div>
			<p>{getDate()}</p>
			<div className='days'>
				{
					days.map((a, i) => <div key={i}>{a}</div>)
				}
			</div>
			<div className='dates'>
				{startMonthFrom()}
			</div>
		</div>
	);
}