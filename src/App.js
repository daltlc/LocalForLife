import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeContent from './components/HomeContent';
import SubmitForm from './components/SubmitForm';
import AllBusinesses from './components/AllBusinesses';
import About from './components/About';
import Resources from './components/Resources';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import config from './aws-exports';
import { FaInstagram } from 'react-icons/fa';
import { createBrowserHistory } from 'history';

Amplify.configure(config);
function App() {
	return (
		<div className="App">
			<header className="header" />
			<Router>
				<div className="container">
					<Navbar bg="light" expand="lg">
						<Navbar.Brand href="#home">
							<strong>LocalForLife</strong>
						</Navbar.Brand>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav" className="nav-main">
							<Nav className="mr-auto">
								{/* <Nav.Link className="logo" href="#home">
									<Link to="/">LocalForLife</Link>
								</Nav.Link> */}
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
								<Nav.Link href="mailto:seattlelocalforlife@gmail.com">Contact</Nav.Link>
							</Nav>
							<Form inline>
								<a href="https://www.instagram.com/seattlelocalforlife/">
									<FaInstagram />
								</a>
							</Form>
						</Navbar.Collapse>
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
			<Footer />
		</div>
	);
}

export default App;
