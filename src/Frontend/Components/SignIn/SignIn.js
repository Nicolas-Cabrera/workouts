import React from 'react';
import './SignIn.css';
import { Link } from 'react-router-dom';

export default function SignIn() {

	return (
		<div className="Sign-Up-Page">
			<div className='signin-text'>
				<h1>Welcome To The Ultimate Workout Buddy</h1>
				<form method='POST' action='/login'>
					<input name='username' type='text' placeholder='Username' />
					<input name='password' type='password' placeholder='Password' />
					<button type='submit'>Login</button>
				</form>
				<Link to='/Register' className='Link'>Sign Up</Link>
			</div>
		</div>
	);	
}