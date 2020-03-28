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
						<p>para parappapapra parapr par par pa rpa rpa rppararapprpa raprarp a par apraarp rap</p>
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
			</div>
		);
	}
}
export default withRouter(NavComp);
