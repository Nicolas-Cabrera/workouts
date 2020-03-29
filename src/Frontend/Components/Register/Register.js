import React, { useState } from 'react';
import './Register.css';
import { Redirect } from 'react-router-dom';

export default function Register() {

	const [ success, setSuccess ] = useState(false);

	function handleSubmit(e) {
		e.preventDefault();
		const username = document.getElementById("username").value;
		const password = document.getElementById("password").value;
		const gender = document.getElementById("gender").value;
		const age = document.getElementById("age").value;
		const height = document.getElementById("height").value;
		const weight = document.getElementById("weight").value;
		const postBody = { username, password, gender, age, height, weight };
		fetch("/formAction", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(postBody)
		});
		setSuccess(true);
	}

	if(success) {
		return <Redirect to='/' />
	} else {
		return (
			<div className='Register'>
				<div className='reg-form'>
					<h1>Enter body measurements</h1>
					<form onSubmit={(e) => handleSubmit(e)}>
						<input id='username' type='text' placeholder='Username' required /><br/>
						<input id='password' type='password' placeholder='Password' required /><br/>
						<select id='gender' type='text'  >
							<option>Male</option>
							<option>Female</option>
						</select><br/>
						<input id='age' type='number' placeholder='Age' required /><br/>
						<input id='height' type='number' placeholder='Height' required /><br/>
						<input id='weight' type='number' placeholder='Weight' required /><br/>
						<input type='submit'></input>
					</form>
				</div>
			</div>
		);
	}
}	