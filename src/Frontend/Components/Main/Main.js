import React, { useState, useEffect } from 'react';
import './Main.css';
import Profile from '../Profile/Profile';
import Exercise from '../Exercise/Exercise';
import Loader from '../Loading/Loading';
import Timer from '../Timer/Timer';
import weight from '../../img/weight.png'
import timer from '../../img/timer.png';
import profile from '../../img/profile.png';
import { Redirect } from 'react-router-dom';

export default function Main() {

	const [ status, setStatus ] = useState();
	const [ tabs, setTabs ] = useState();

	useEffect(() => {
		fetch('/test')
			.then(response => response.json())
			.then(res => setStatus(res.message))
	});

	function handleTabs(e) {
		setTabs(e.target.value);
	}
	if(!status) {
		return <Loader />
	} else if(status === 'yes') {
		return (
			<div>
				<div className='top'>
					{
						tabs === 'Exercise' ? <Exercise /> : 
							tabs === 'Timer' ? <Timer /> :
								<Profile />
					}
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
		);
	} else {
		return <Redirect to='/' />
	}
}