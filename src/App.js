import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalContext';
import './App.css';
import PrivateRoute from './components/PrivateRoute';
import login from './pages/login';
import signup from './pages/signup';
import inprogress from './pages/inprogress';
import completed from './pages/completed';
import backlog from './pages/backlog';

function App() {
	return (
		<div className="App">
			<Router>
				<GlobalProvider>
					<Switch>
						<PrivateRoute exact path="/" component={inprogress} />
						<PrivateRoute exact path="/completed" component={completed} />
						<PrivateRoute exact path="/backlog" component={backlog} />
						<Route exact path="/login" component={login} />
						<Route exact path="/signup" component={signup} />
					</Switch>
				</GlobalProvider>
			</Router>
		</div>
	);
}

export default App;
