import React, { useEffect, useState } from 'react';
import './Exercise.css';	
import { Link } from 'react-router-dom';
import back from '../../img/back.png';

export default function Workouts(props) {

	const [ num ] = useState(props.location.state.num);
	const [ muscle ] = useState(props.location.state.muscle);
	const [ workouts, setWorkouts ] = useState();
	const [ gridClass, setGridClass ] = useState('');

	useEffect(() => {
		fetch('/rest/workouts')
			.then(response => response.json())
			.then(res => {
				setWorkouts(res[num][muscle]);
				if(res[num][muscle].length < 5) {
					setGridClass('grid-workouts less'); 
				} else {
					setGridClass('grid-workouts more');
				}
			})
	}, []);

	return (
		<div>
			<div className='title'>
				<Link to={{ pathname: '/Main', state:{tab: 'Exercise' }}} ><img className='back' src={back} alt='back' /></Link>
				<h1>{props.location.state.muscle}</h1>
			</div>
			<div className={gridClass}>
				{
					workouts ? workouts.map((a, i) => 
						<div key={i} className='grid-item'>
							<Link to={{ pathname: '/Muscle', state:{array: workouts, muscle: a.url }}}  className='link'>								
								<h5>
									<img className='workout-image' src={require(`../../img/Workouts/${a.image}.png`)} alt='img' />
									{a.name}
								</h5>
							</Link>
						</div>) : null
				}
			</div> 
		</div>
	);
}