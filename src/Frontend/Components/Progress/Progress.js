import React, { useState } from 'react';
import './Progress.css';

export default function Progress() {

	const dates = [];
	const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
	const date = new Date();
	const month = date.getMonth();
	const starts = [];

	var getDaysInMonth = function(month, year) {
	   return new Date(year, month, 0).getDate();
	  };

	function getDate() {
		let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Sept', 'Oct', 'Nov', 'Dec'];
		let day = date.getDate();
		let year = date.getFullYear();
		return `${day} ${months[month]} ${year}`;
	}

	function startMonthFrom() {
		let firstDay = new Date(2020, 1, 1).getDay();
		
		for(let start = 1; start <= firstDay; start ++) {
			starts.push(start);
		}

		for(let date = 1; date <= getDaysInMonth(month, 2020); date ++) {
			dates.push(date);
		}

		const zeros = starts.splice(1).map((a) => a * 0);

		const final = zeros.concat(dates);
		return final.map((a, i) => <div key={i}>{a}</div>)
		//console.log(final);
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