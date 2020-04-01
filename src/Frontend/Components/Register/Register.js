import React, { useState } from 'react';
import './Register.css';
import { Redirect } from 'react-router-dom';

export default function Register() {

	return (
		<div className='Register'>
			<div className='reg-form'>
				<h1>Enter body measurements</h1>
				<form  method='POST' action='/formAction'>
					<input name='username' type='text' placeholder='Username' required /><br/>
					<input name='password' type='password' placeholder='Password' required /><br/>
					<select name='gender' type='text'  >
						<option>Male</option>
						<option>Female</option>
					</select><br/>
					<input name='age' type='number' placeholder='Age' required /><br/>
					<input name='height' type='number' placeholder='Height' required /><br/>
					<input name='weight' type='number' placeholder='Weight' required /><br/>
					<input type='submit'></input>
				</form>
			</div>
		</div>
	);
}	