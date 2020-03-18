import React from 'react';
import './Register.css';

export default function Register() {

	return (
		<div className='Register'>
			<div className='reg-form'>
				<h1>Enter body measurements</h1>
				<form>
					<input type='text' placeholder='Gender' /><br/>
					<input type='number' placeholder='Age' /><br/>
					<input type='number' placeholder='Height' /><br/>
					<input type='number' placeholder='Weight' /><br/>
					<button>Start Training</button>
				</form>
			</div>
		</div>
	);
}