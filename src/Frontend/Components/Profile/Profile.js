import React, { useEffect, useState } from 'react';
import './Profile.css';
import usericon from '../../img/user.png';

export default function Profile() {

	const [ user, setUser ] = useState({});

	useEffect(() => {
		fetch('/current')
			.then(response => response.json())
			.then(user => {
				setUser(user[0])
				console.log(user[0])
			})
	}, []);

	return (
		<div>
			<div className='title'>
				<h1>Profile</h1>
			</div>
			<img className='user-icon' src={usericon} alt='user' />
				<p>Welcome {user.name}</p>
			<form method='POST' action='/logout'>
				<input type='submit' value='Logout'></input>
			</form>
		</div>
	);
}