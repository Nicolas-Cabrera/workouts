import React, { useState } from 'react';
import './Progress.css';

export default function Progress() {

	const [ days, setDays ] = useState([]);

	for(let day = 1; day <= 31; day ++) {
		days.push(day);
	}

	return (
		<div>
			<p>This is the progress component</p>
			<div className='days'>
				{
					days.map((a) => <div>{a}</div>)	
				}
			</div>
		</div>
	);
}