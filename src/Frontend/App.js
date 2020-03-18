import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import SignUp from './Components/SignUp/SignUp';
import Register from './Components/Register/Register';

function App() {

	return (
		<Router>
			<Switch>
				<div className='App'>
					<Route exact path='/' component={SignUp} />
					<Route exact path='/Register' component={Register}/>
					{/* <Route exact path='/Main' />  */}
				</div>
			</Switch>
		</Router>
	);
}

export default App;
