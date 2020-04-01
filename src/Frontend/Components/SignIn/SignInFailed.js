import React from 'react';
import './SignIn.css';
import { Link } from 'react-router-dom';

export default function SignIn() {

	return (
		<div className="Sign-Up-Page">
			<div className='signin-text'>
				<h1>Welcome To The Ultimate Workout Buddy</h1>
				<form method='POST' action='/login'>
					<input name='username' type='text' placeholder='Username' required/>
					<input name='password' type='password' placeholder='Password' required/>
					<input type='submit' value='Login'></input>
					<h3 className='wrong-login'>Credentials do not exist</h3>
				</form>
				<Link to='/Register' className='Link'>Sign Up</Link>
			</div>
		</div>
	);
}