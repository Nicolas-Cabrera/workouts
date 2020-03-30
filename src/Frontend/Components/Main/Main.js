import React, { useState } from 'react';
import './Main.css';
import Profile from '../Profile/Profile';
import Exercise from '../Exercise/Exercise';
import Timer from '../Timer/Timer';
import weight from '../../img/weight.png'
import timer from '../../img/timer.png';
import profile from '../../img/profile.png';

export default function Main() {

	const [ tabs, setTabs ] = useState();

	function handleTabs(e) {
		setTabs(e.target.value);
	}

	return (
		<div>
			<div className='top'>
				{/* {
					tabs === 'Exercise' ? <Exercise /> : 
						tabs === 'Timer' ? <Timer /> :
							<Profile />
				} */}
				<Timer />
			</div>
			<div className='bottom-menu'>
				<ul>
					<li><button onClick={(e) => handleTabs(e)} 
						value='Exercise'><div><img src={weight} alt='weight'/></div>Exercise</button></li>
					<li><button onClick={(e) => handleTabs(e)} 
						value='Timer'><div><img src={timer} alt='timer'/></div>Timer</button></li>
					<li><button onClick={(e) => handleTabs(e)} 
						value='Profile'><div><img src={profile} alt='profile'/></div>Profile</button></li>
				</ul>
			</div>
		</div>
	)
}