import React from 'react';
import './SignUp.css';
import GoogleLogin from 'react-google-login';

export default function SignUp() {

	const responseGoogle = (response) => {
		console.log(response);
	}

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
}