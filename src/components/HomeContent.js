import React from 'react';
import { Button, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeTop3 from './HomeTop3';
import { withRouter } from 'react-router-dom';

class NavComp extends React.Component {
	nextPath(path) {
		this.props.history.push(path);
	}
	render() {
		return (
			<div className="container home-main">
				<div className="row">
					<div className="col-xl-6 home-main__left">{/* <p>Logo</p> */}</div>
					<div className="col-xl-6 home-main__right">
						<h1>We want to empower the creativity, diversity and community that makes our city thrive.</h1>
						<br />
						<p>
							In an effort to support these businesses during these trying times of global health concern
							and a call for social distancing, we are working to create a network where people can engage
							local businesses remotely.
						</p>
						<p>Join us in helping now or submit your own local business!</p>
						<Button
							onClick={() => this.nextPath('/submit')}
							className="home-main__button"
							variant="primary"
							size="lg"
						>
							Submit your buisness
						</Button>{' '}
					</div>
				</div>
				<HomeTop3 />
				<div className="viewa-all-button-container">
					<Button
						onClick={() => this.nextPath('/submit')}
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
export default withRouter(NavComp);
