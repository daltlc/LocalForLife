import React from 'react';
import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeContent from './components/HomeContent';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap';
import SubmitForm from './components/SubmitForm';

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
							<Nav.Link href="#home">
								<Link to="/about">About</Link>
							</Nav.Link>
							<Nav.Link href="#home">
								<Link to="/submit">Submit</Link>
							</Nav.Link>
							<Nav.Link href="#home">
								<Link to="/users">Resources</Link>
							</Nav.Link>
						</Nav>
					</Navbar>

					{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
					<Switch>
						<Route path="/about">{/* <About /> */}</Route>
						<Route path="/users">{/* <Users /> */}</Route>
						<Route path="/submit">
							<SubmitForm />
						</Route>
						<Route path="/resources">{/* <Users /> */}</Route>

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
