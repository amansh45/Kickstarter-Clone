import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
// Link object is a react component which allows us to render anchor tag into our react component
// Router allows to programatically redirect across the application
import { Router } from '../../routes';


class CampaignNew extends Component {
	state = {
		minimumContribution: '',
		errorMessage: '',
		loading: false
	};

	onSubmit = async (event) => {
		// This will keep the browser from submitting the form to the server.
		event.preventDefault();

		this.setState({ loading: true, errorMessage: '' });

		try {
			const accounts = await web3.eth.getAccounts();
			await factory.methods.createCampaign(this.state.minimumContribution)
				.send({
					from: accounts[0]
				});
			Router.pushRoute('/');
		} catch(err) {
			this.setState({ errorMessage: err.message });
		}		

		this.setState({ loading: false });

	};

	render() {
		// parenthesis () is not placed while calling this.onSubmit because we immediately do not want to call that function.
		// We want to call it somewhere in future...
		// !"string" will be true for empty string
		return(
			<Layout>
				<h3>Create a campaign</h3>
				<Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
					<Form.Field>
						<label>Minimum Contribution</label>
						<Input 
							label="wei" 
							labelPosition="right" 
							value={this.state.minimumContribution} 
							onChange={event => this.setState({ minimumContribution: event.target.value })}/>
					</Form.Field>
					<Message error header="Oops!" content={this.state.errorMessage} />
					<Button loading={this.state.loading} primary>Create!</Button>
				</Form>
			</Layout>
		);
	}
}

export default CampaignNew;