import React from 'react';
import { Button, Card, Header, ListGroup, Item } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { API, graphqlOperation } from 'aws-amplify';

export default class HomeTop3 extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<Card style={{ width: '18rem' }}>
						<Card.Header>
							<strong>Resource Links</strong>
						</Card.Header>
						<ListGroup variant="flush">
							<ListGroup.Item />
						</ListGroup>
					</Card>
				</div>
			</div>
		);
	}
}
