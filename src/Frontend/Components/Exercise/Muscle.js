import React, { useState } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';

export default function Muscle(props) {

	const { muscleId } = useParams();

	console.log(muscleId);

	//TODO:
	//Send params from previous page to show the correct muscle and exercise selected
	//Add back button to go back to corresponding page

	return (
		<div>
			<div className='title'>
				
				{/* <Link to='/Workout' ><img className='back' src={back} alt='back' /></Link> */}
				{/* <h1>{muscle}</h1> */}
			</div>
		</div>
	)
}