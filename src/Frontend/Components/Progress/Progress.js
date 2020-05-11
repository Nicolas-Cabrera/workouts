import React, { useState } from 'react';
import './Progress.css';

export default function Progress() {

	const [ dates, setDates ] = useState([]);
	const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

	for(let date = 1; date <= 31; date ++) {
		dates.push(date);
	}

	return (
		<div>
			<p>This is the progress component</p>
			<div className='days'>
				{
					days.map((a) => <div>{a}</div>)
				}
			</div>
			<div className='dates'>
				{
					dates.map((a) => <div>{a}</div>)	
				}
			</div>
		</div>
	);
}