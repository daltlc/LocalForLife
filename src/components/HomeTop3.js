import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { API, graphqlOperation } from 'aws-amplify';
import { listBuisnesss } from '../graphql/queries';

export default class HomeTop3 extends React.Component {
	state = {
		businesses: []
	};
	async componentDidMount() {
		try {
			const businesses = await API.graphql(graphqlOperation(listBuisnesss));
			this.setState({ businesses: businesses.data.listBuisnesss.items });
			console.log('businesses:', businesses);
		} catch (err) {
			console.log('error:', err);
		}
	}
	render() {
		return (
			<div className="home-top-3">
				<div className="row">
					{this.state.businesses.slice(0, 3).map((buisness, index) => (
						<div className="home-top-3__inner col-xl-4">
							<div className="item">
								<h1>{buisness.nameOfBusiness}</h1>
								<p>{buisness.yourName}</p>
								<p>{buisness.deal}</p>
								<p>{buisness.siteURL}</p>
								<p>{buisness.image}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		);
	}
}
