import React from 'react';
import './App.css';
import Test from './Test';
import GoogleLogin from 'react-google-login';

function App() {

	const responseGoogle = (response) => {
		console.log(response);
	}

	return (
		<div className="App">
			<h1>Helloo and welcome</h1>
			<Test />

			<GoogleLogin
				clientId="436450418933-l94fngjjubjdqajp88d6rpkh7o5lira5.apps.googleusercontent.com"
				buttonText="Login"
				onSuccess={responseGoogle}
				onFailure={responseGoogle}
				cookiePolicy={'single_host_origin'}
			/>
		</div>
	);
}

export default App;
