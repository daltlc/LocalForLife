import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeTop3 from './HomeTop3';

export default class NavComp extends React.Component {
	render() {
		return (
			<div className="container home-main">
				<div className="row">
					<div className="col-xl-6 home-main__left">
						<p>Logo</p>
					</div>
					<div className="col-xl-6 home-main__right">
						<h1>We want to empower the creativity, diversity and community that makes our city thrive.</h1>
						<p>para parappapapra parapr par par pa rpa rpa rppararapprpa raprarp a par apraarp rap</p>
						<Button className="home-main__button" variant="primary" size="lg">
							Submit your buisness
						</Button>{' '}
					</div>
				</div>
				<HomeTop3 />
			</div>
		);
	}
}
