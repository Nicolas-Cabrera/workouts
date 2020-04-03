import React from 'react';
import './Profile.css'

export default function Profile() {
	return (
		<div>
			<div className='title'>
				<h1>Profile</h1>
			</div>
			<p>This is the profile tabs</p>

			<form method='POST' action='/logout'>
				<input type='submit' value='Logout'></input>
			</form>
		</div>
	);
}