import React from 'react';
import { Button, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeTop3 from './HomeTop3';
import { withRouter } from 'react-router-dom';

class HomeContent extends React.Component {
	nextPath(path) {
		this.props.history.push(path);
	}
	render() {
		return (
			<div className="container home-main">
				<div className="row">
					<div className="col-xl-6 home-main__left">{/* <p>Logo</p> */}</div>
					<div className="col-xl-1" />
					<div className="col-xl-5 home-main__right">
						<h1>We want to empower the creativity, diversity and community that makes our city thrive.</h1>
						<br />
						<p>
							In an effort to support local businesses during this time of global health concern and call
							for social distancing, we are working to create a network where people can engage local
							businesses remotely.
						</p>
						<p>
							This site will be crowd sourced and allow local businesses to offer promotions that may be
							accessed remotely by everyone, such as coupon codes, discounts, deals or gift cards.
						</p>
						<p>
							Join us now by submitting your favorite local business or submit your own local business
							today!
						</p>
						<Button
							onClick={() => this.nextPath('/submit')}
							className="home-main__button"
							variant="primary"
							size="lg"
						>
							Submit your business
						</Button>{' '}
					</div>
				</div>
				<HomeTop3 />
				<div className="view-all-button-container">
					<Button
						onClick={() => this.nextPath('/allbusinesses')}
						className="home-main__button"
						variant="primary"
						size="lg"
					>
						View All
					</Button>{' '}
				</div>
			</div>
		);
	}
}
export default withRouter(HomeContent);
