import React, { useEffect, useState } from 'react';
import './Profile.css';
import usericon from '../../img/user.png';
import progress from '../../img/progress.png';
import Loading from '../Loading/Loading';
export default function Profile() {

	const [ user, setUser ] = useState({});

	useEffect(() => {
		fetch('/current')
			.then(response => response.json())
			.then(user => {
				setUser(user[0])
			})
	}, []);


	if(!user) {
		return <Loading />
	} else if(user) {
		return (
			<div>
				<div className='title'>
					<h1>Profile</h1>
				</div>
				<img className='user-icon' src={usericon} alt='user' />
				<p>Welcome {user.name}</p>
				<div className='personal-info'>
					<div>
						<h3>Age</h3>
						<h3>Height</h3>
						<h3>Weight</h3>
					</div>
					<div>
						<h4>{user.age}</h4>
						<h4>{user.height}</h4>
						<h4>{user.weight}</h4>
					</div>
				</div>
				<button className='progress'><img className='progress-image' src={progress} alt='progress' />Progress</button>
				<form method='POST' action='/logout'>
					<input className='logout' type='submit' value='Logout'></input>
				</form>
			</div>
		);
	}
}