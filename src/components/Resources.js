import React from 'react';
import { Button, Card, Header, ListGroup, Item } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { API, graphqlOperation } from 'aws-amplify';

export default class HomeTop3 extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<Card style={{ width: '100%', marginBottom: '20px' }}>
						<Card.Header>
							<strong>Resource Links</strong>
						</Card.Header>
						<ListGroup variant="flush">
							<ListGroup.Item>
								<a href="https://coronavirus.wa.gov/">https://coronavirus.wa.gov/</a>
							</ListGroup.Item>
							<ListGroup.Item>
								<a href="https://www.dol.gov/coronavirus">https://www.dol.gov/coronavirus</a>
							</ListGroup.Item>
							<ListGroup.Item>
								<a href="https://www.cdc.gov/coronavirus/resources.html">
									https://www.cdc.gov/coronavirus/resources.html
								</a>
							</ListGroup.Item>
							<ListGroup.Item>
								<a href="http://coronavirusapi.com/">http://coronavirusapi.com/</a>
							</ListGroup.Item>
							{/* <ListGroup.Item>http://coronavirusapi.com/</ListGroup.Item> */}
						</ListGroup>
					</Card>
				</div>
			</div>
		);
	}
}
