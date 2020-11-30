import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Order from './views/Order';
import Payment from './views/Payment';
import Success from './views/Success';

function App() {
	return (
		<Router>
			<div className='App'>
				<Switch>
					<Route exact path='/'>
						<Order />
					</Route>
					<Route exact path='/payment'>
						<Payment />
					</Route>
					<Route exact path='/success'>
						<Success />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
