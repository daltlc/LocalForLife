import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeContent from './components/HomeContent';
import SubmitForm from './components/SubmitForm';
import AllBusinesses from './components/AllBusinesses';
import About from './components/About';
import Resources from './components/Resources';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);
function App() {
	return (
		<div className="App">
			<header className="header" />
			<Router>
				<div className="container">
					<Navbar className="nav-main" bg="light" variant="light">
						<Nav className="mr-auto">
							<Nav.Link className="logo" href="#home">
								<Link to="/">LocalForLife</Link>
							</Nav.Link>
							<Nav.Link href="#home">
								<Link to="/">Home</Link>
							</Nav.Link>
							<Nav.Link href="#submit">
								<Link to="/submit">Submit</Link>
							</Nav.Link>
							<Nav.Link href="#resources">
								<Link to="/resources">Resources</Link>
							</Nav.Link>
							<Nav.Link href="#allbusinesses">
								<Link to="/allbusinesses">All Businesses</Link>
							</Nav.Link>
						</Nav>
					</Navbar>

					{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

					<Switch>
						<Route path="/allbusinesses">
							<AllBusinesses />
						</Route>
						<Route path="/users">{/* <Users /> */}</Route>
						<Route path="/submit">
							<SubmitForm />
						</Route>
						<Route path="/resources">
							<Resources />
						</Route>

						<Route path="/">
							<HomeContent />
						</Route>
					</Switch>
				</div>
			</Router>
			{/* <NavComp /> */}
		</div>
	);
}

export default App;
