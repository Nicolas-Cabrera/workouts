import React from 'react';
import './Register.css';

export default function Register() {

	return (
		<div className='Register'>
			<div className='reg-form'>
				<h1>Enter body measurements</h1>
				<form method='POST' action='/formAction'>
					<select name='gender' type='text' >
						<option>Male</option>
						<option>Female</option>
					</select><br/>
					<input name='age' type='number' placeholder='Age' /><br/>
					<input name='height' type='number' placeholder='Height' /><br/>
					<input name='weight' type='number' placeholder='Weight' /><br/>
					<input type='submit'></input>
				</form>
			</div>
		</div>
	);
}	