import React, { useState } from 'react';
import './SignIn.css';
import { Redirect, Link } from 'react-router-dom';

export default function SignIn() {

	const [ user, setUser ] = useState(''); 

	if(user === '') {
		return (
			<div className="Sign-Up-Page">
				<div className='signin-text'>
					<h1>Welcome To The Ultimate Workout Buddy</h1>
					<form>
						<input type='text' placeholder='Username' />
						<input type='password' placeholder='Password' />
						<button type='submit'>Login</button>
					</form>
					<Link to='/Register' className='Link'>Sign Up</Link>
				</div>
			</div>
		);	
	} else {
		return <Redirect to='/Register' />
	}
}