import React from 'react';
import { Button } from 'react-bootstrap';
import { FaInstagram } from 'react-icons/fa';
import { Navbar } from 'react-bootstrap';

export default class HomeTop3 extends React.Component {
	render() {
		return (
			<div className="footer container">
				<Navbar bg="light" variant="light" expand="lg">
					<Navbar.Collapse className="nav-main">
						<Navbar.Collapse>
							<a href="https://www.instagram.com/seattlelocalforlife/">
								<FaInstagram />
							</a>
						</Navbar.Collapse>
						<Navbar.Collapse className="justify-content-end">
							<Navbar.Text>seattlelocalforlife@gmail.com</Navbar.Text>
						</Navbar.Collapse>
					</Navbar.Collapse>
				</Navbar>
			</div>
		);
	}
}
