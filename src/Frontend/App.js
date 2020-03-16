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
				clientId="436450418933-1gb19igjut0e2s2dag5g7vpq7ink236p.apps.googleusercontent.com"
				buttonText="Login"
				onSuccess={responseGoogle}
				onFailure={responseGoogle}
				cookiePolicy={'single_host_origin'}
			/>
		</div>
	);
}

export default App;
