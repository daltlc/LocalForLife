import React from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { API, graphqlOperation } from 'aws-amplify';
import { createBuisness } from '../graphql/mutations';

export default class SubmitForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			yourEmail: '',
			nameOfBusiness: '',
			yourName: '',
			deal: '',
			siteURL: '',
			image: '',
			businesses: []
		};
	}

	handleOnChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	addInfo = async (event) => {
		const { yourEmail, nameOfBusiness, yourName, deal, siteURL, image, businesses } = this.state;

		event.preventDefault();

		const input = {
			yourEmail,
			nameOfBusiness,
			yourName,
			deal,
			siteURL,
			image
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
			siteURL: '',
			image: ''
		});
	};
	render() {
		return (
			<div className="row submit-main">
				<div className="col-xl-6 submit-main__instructions" />
				<div className="col-xl-6">
					<InputGroup size="sm" className="mb-3">
						<InputGroup.Prepend>
							<InputGroup.Text id="inputGroup-sizing-sm">Your Name</InputGroup.Text>
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
							<InputGroup.Text id="inputGroup-sizing-sm">Email Address</InputGroup.Text>
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
							<InputGroup.Text id="inputGroup-sizing-sm">Name of Buisness</InputGroup.Text>
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
							<InputGroup.Text id="inputGroup-sizing-sm">Deal</InputGroup.Text>
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
							<InputGroup.Text id="inputGroup-sizing-sm">Site URL</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl
							name="siteURL"
							onChange={this.handleOnChange}
							aria-label="Small"
							aria-describedby="inputGroup-sizing-sm"
						/>
					</InputGroup>
					<InputGroup size="sm" className="mb-3">
						<InputGroup.Prepend>
							<InputGroup.Text id="inputGroup-sizing-sm">Upload Image</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl
							name="image"
							onChange={this.handleOnChange}
							aria-label="Small"
							aria-describedby="inputGroup-sizing-sm"
						/>
					</InputGroup>
					<Button onClick={() => this.addInfo()} className="home-main__button" variant="primary" size="lg">
						Submit
					</Button>{' '}
				</div>
			</div>
		);
	}
}
