import React from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class SubmitForm extends React.Component {
	render() {
		return (
			<div className="row submit-main">
				<div className="col-xl-6 submit-main__instructions" />
				<div className="col-xl-6">
					<InputGroup size="sm" className="mb-3">
						<InputGroup.Prepend>
							<InputGroup.Text id="inputGroup-sizing-sm">Email Address</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
					</InputGroup>
					<InputGroup size="sm" className="mb-3">
						<InputGroup.Prepend>
							<InputGroup.Text id="inputGroup-sizing-sm">Your Name</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
					</InputGroup>
					<InputGroup size="sm" className="mb-3">
						<InputGroup.Prepend>
							<InputGroup.Text id="inputGroup-sizing-sm">Buisness Name</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
					</InputGroup>
					<InputGroup size="sm" className="mb-3">
						<InputGroup.Prepend>
							<InputGroup.Text id="inputGroup-sizing-sm">Deal you're offering</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
					</InputGroup>
					<InputGroup size="sm" className="mb-3">
						<InputGroup.Prepend>
							<InputGroup.Text id="inputGroup-sizing-sm">
								Link to landing page of deal offered
							</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
					</InputGroup>
				</div>
			</div>
		);
	}
}
