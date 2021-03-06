import React from 'react';
import { Button, InputGroup, FormControl, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { API, graphqlOperation } from 'aws-amplify';
import { createBuisness } from '../graphql/mutations';
import { withRouter } from 'react-router-dom';

class SubmitForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			yourEmail: '',
			nameOfBusiness: '',
			yourName: '',
			deal: '',
			// phoneNumber: '',
			siteURL: '',
			businesses: []
		};
	}
	nextPath(path) {
		this.props.history.push(path);
	}
	handleOnChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	addInfo = async (event, path) => {
		const { yourEmail, nameOfBusiness, yourName, deal, siteURL, businesses } = this.state;

		const input = {
			yourEmail,
			nameOfBusiness,
			yourName,
			deal,
			siteURL
		};

		const result = await API.graphql(graphqlOperation(createBuisness, { input }));
		const newAddInfo = result.data.createBuisness;
		const updatedAddInfo = [ newAddInfo, ...businesses ];
		this.setState({
			businesses: updatedAddInfo,
			yourEmail: '',
			nameOfBusiness: '',
			yourName: '',
			deal: '',
			siteURL: ''
		});

		this.nextPath('/allbusinesses');
	};
	render() {
		return (
			<div className="row submit-main">
				<div className="col-xl-5 submit-main__instructions">
					<h1>Promotion Submission</h1>
					<p>
						In this global time of need, local solidarity is everything. Please use this form if you are a
						local business or know of one offering a promotion that may be accessed remotely or in the
						future.
					</p>
					<p>
						These promotions are meant to offer community and small business support, while maintaining the
						safety of both.
					</p>
					<p>PLEASE READ</p>
					<p>Follow these rules to submit your promotion: </p>
					<ul className="list-no-styles">
						<li>You MUST be a local Seattle business.</li>
						<li>Only one submission per business.</li>
						<li>We reserve the right to remove submissions for any reason.</li>
					</ul>
					<strong>Stay safe and support local!</strong>
				</div>
				<div className="col-xl-7 submit-main__form">
					<h3>Required fields*</h3>
					<InputGroup size="sm" className="mb-3">
						<InputGroup.Prepend>
							<InputGroup.Text id="inputGroup-sizing-sm">Your Name*</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl
							name="yourName"
							onChange={this.handleOnChange}
							aria-label="Small"
							aria-describedby="inputGroup-sizing-sm"
						/>
					</InputGroup>
					<InputGroup size="sm" className="mb-3">
						<InputGroup.Prepend>
							<InputGroup.Text id="inputGroup-sizing-sm">Email Address*</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl
							type="text"
							name="yourEmail"
							onChange={this.handleOnChange}
							aria-label="Small"
							aria-describedby="inputGroup-sizing-sm"
						/>
					</InputGroup>
					<InputGroup size="sm" className="mb-3">
						<InputGroup.Prepend>
							<InputGroup.Text id="inputGroup-sizing-sm">Name of Business*</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl
							type="text"
							name="nameOfBusiness"
							onChange={this.handleOnChange}
							aria-label="Small"
							aria-describedby="inputGroup-sizing-sm"
						/>
					</InputGroup>
					<InputGroup size="sm" className="mb-3">
						<InputGroup.Prepend>
							<InputGroup.Text id="inputGroup-sizing-sm">Deal*</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl
							name="deal"
							onChange={this.handleOnChange}
							aria-label="Small"
							aria-describedby="inputGroup-sizing-sm"
						/>
					</InputGroup>
					<InputGroup size="sm" className="mb-3">
						<InputGroup.Prepend>
							<InputGroup.Text id="inputGroup-sizing-sm">Site URL*</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl
							name="siteURL"
							onChange={this.handleOnChange}
							aria-label="Small"
							aria-describedby="inputGroup-sizing-sm"
						/>
					</InputGroup>
					{/* <InputGroup size="sm" className="mb-3">
						<InputGroup.Prepend>
							<InputGroup.Text id="inputGroup-sizing-sm">Phone Number*</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl
							name="phoneNumber"
							onChange={this.handleOnChange}
							aria-label="Small"
							aria-describedby="inputGroup-sizing-sm"
						/>
					</InputGroup> */}
					{/* <InputGroup size="sm" className="mb-3">
						<InputGroup.Prepend>
							<InputGroup.Text id="inputGroup-sizing-sm">Upload Image*</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl
							name="image"
							onChange={this.handleOnChange}
							aria-label="Small"
							aria-describedby="inputGroup-sizing-sm"
						/>
					</InputGroup> */}
					{/* <Form.Group controlId="exampleForm.ControlSelect1">
						<Form.Label>Category of business</Form.Label>
						<Form.Control as="select">
							<option>Food</option>
							<option>Retail</option>
							<option>Online</option>
							<option>4</option>
							<option>5</option>
						</Form.Control>
					</Form.Group> */}
					<div>
						<Button onClick={() => this.addInfo()} className="home-main__button" size="lg">
							Submit
						</Button>{' '}
					</div>
				</div>
			</div>
		);
	}
}
export default withRouter(SubmitForm);
