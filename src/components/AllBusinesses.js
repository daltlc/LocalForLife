import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { API, graphqlOperation } from 'aws-amplify';
import { listBuisnesss } from '../graphql/queries';
import { FaGlobeAmericas, FaCoins, FaWarehouse, FaPhone } from 'react-icons/fa';

export default class AllBusinesses extends React.Component {
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
			<div className="all-businesses-main">
				<div className="row">
					{this.state.businesses.map((buisness, index) => (
						<div className="all-businesses-main__inner col-xl-4">
							<div className="item">
								<h1>{buisness.nameOfBusiness}</h1>
								{/* <p>
									<FaWarehouse />
									&nbsp;{buisness.yourName}
								</p> */}
								<p>
									<FaCoins />
									&nbsp;
									{buisness.deal}
								</p>
								<p>
									<FaGlobeAmericas />
									&nbsp;
									<a href={buisness.siteURL}>Website or Deal</a>
								</p>
								<p>
									<FaPhone />
									&nbsp;{buisness.phoneNumber}
								</p>{' '}
							</div>
						</div>
					))}
				</div>
			</div>
		);
	}
}
