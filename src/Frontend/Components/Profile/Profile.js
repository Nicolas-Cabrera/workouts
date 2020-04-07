import React, { useEffect, useState } from 'react';
import './Profile.css';
import usericon from '../../img/user.png';

export default function Profile() {

	const [ user, setUser ] = useState();

	useEffect(() => {
		fetch('/current')
			.then(response => response.json())
			.then(user => {
				setUser(user)
				console.log(user)
			})
	}, []);

	return (
		<div>
			<div className='title'>
				<h1>Profile</h1>
			</div>
			<img className='user-icon' src={usericon} alt='user' />
 			<p>This is the profile tabs</p>

			<form method='POST' action='/logout'>
				<input type='submit' value='Logout'></input>
			</form>
		</div>
	);
}