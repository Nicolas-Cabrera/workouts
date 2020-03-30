import React, { useState } from 'react';
import './SignIn.css';
import { Link, Redirect } from 'react-router-dom';

export default function SignIn() {

	const [ status, setStatus ] = useState();

	function onHandle(e) {
		e.preventDefault();
		const username = document.getElementById("username").value;
		const password = document.getElementById("password").value;
		const postBody = { username, password };
		fetch("/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(postBody)
		})
		.then(response => response.json())
		.then(data => {
			setStatus(data.response);
		})
	}

	if(status === 'Login Successful') {
		return <Redirect to='/Main' />
	} else if(status === 'Credentials do not exist') {
		return (
			<div className="Sign-Up-Page">
				<div className='signin-text'>
					<h1>Welcome To The Ultimate Workout Buddy</h1>
					<form onSubmit={(e) => onHandle(e)}>
						<input id='username' type='text' placeholder='Username' required/>
						<input id='password' type='password' placeholder='Password' required/>
						<input type='submit' value='Login'></input>
						<h3 className='wrong-login'>Credentials do not exist</h3>
					</form>
					<Link to='/Register' className='Link'>Sign Up</Link>
				</div>
			</div>
		);
	} else {
		return (
			<div className="Sign-Up-Page">
				<div className='signin-text'>
					<h1>Welcome To The Ultimate Workout Buddy</h1>
					<form onSubmit={(e) => onHandle(e)}>
						<input id='username' type='text' placeholder='Username' required/>
						<input id='password' type='password' placeholder='Password' required/>
						<input type='submit' value='Login'></input>
					</form>
					<Link to='/Register' className='Link'>Sign Up</Link>
				</div>
			</div>
		);
	}
}