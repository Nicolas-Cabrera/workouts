import React, { useState } from 'react';
import './SignUp.css';
import GoogleLogin from 'react-google-login';
import { Redirect } from 'react-router-dom';

export default function SignUp() {

	const [ user, setUser ] = useState(''); 

	const responseGoogle = (response) => {
		setUser(response);
		console.log(response);
		console.log(user);
	}

	if(user === '') {
		return (
			<div className="Sign-Up-Page">
				<div className='signup-text'>
					<h1>Welcome To The Ultimate Workout Buddy</h1>
					<h3>Login in using Google to record your workouts and see you stats</h3>
				</div>
				<GoogleLogin className='google'
					clientId="436450418933-l94fngjjubjdqajp88d6rpkh7o5lira5.apps.googleusercontent.com"
					buttonText="Login"
					onSuccess={responseGoogle}
					onFailure={responseGoogle}
					cookiePolicy={'single_host_origin'}
				/>
			</div>
		);	
	} else {
		return <Redirect to='/Register' />
	}
}