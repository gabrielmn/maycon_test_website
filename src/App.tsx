import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import PanelContainer from './container/PanelContainer/PanelContainer';
import NotFound from './screens/NotFound/NotFound';
export default class App extends Component {

	render(): React.ReactNode {
		return (
			<Switch>
				<Route exact path='/login' >
					<LoginScreen />
				</Route>
				<Route path='/panel' >
					<PanelContainer />
				</Route>
				<Route exact path='/'>
					<Redirect to='/login' />
				</Route>
				<Route path='/not-found'>
					<NotFound />
				</Route>
				<Route path='*'>
					<Redirect to='/not-found' />
				</Route>
			</Switch >
		)
	}


}
