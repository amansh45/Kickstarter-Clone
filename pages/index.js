// For every file in the pages directory next assumes that every file will exports some react component...
// Otherwise next will thow an error..

import React, { Component } from 'react';
import factory from '../ethereum/factory';

class CampaignIndex extends Component {
	
	// This is a lifecycle methods which helps to run the code inside the function onto the next server...
	static async getInitialProps() {
		const campaigns = await factory.methods.getDeployedContracts().call();
		return { campaigns };
	}

	render() {
		return <div>{this.props.campaigns[0]}</div>;
	}
}

export default CampaignIndex;