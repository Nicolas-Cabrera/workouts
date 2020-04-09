import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import SignIn from './Components/SignIn/SignIn';
import SignInFailed from './Components/SignIn/SignInFailed';
import Register from './Components/Register/Register';
import Main from './Components/Main/Main';
import Workouts from './Components/Exercise/Workouts';

function App() {

	return (
		<Router>
			<Switch>
				<div className='App'>
					<Route exact path='/' component={SignIn} />
					<Route exact path='/signinfailed' component={SignInFailed} />
					<Route exact path='/Register' component={Register} />
					<Route exact path='/Main' component={Main} /> 
					<Route exact path='/Workouts' component={Workouts} />
				</div>
			</Switch>
		</Router>
	);
}

export default App;
