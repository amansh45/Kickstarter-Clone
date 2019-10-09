// This script houses the common layout components among various pages...
// Headers and footers can be added here and be used across different pages...

import React from 'react';
import { Container } from 'semantic-ui-react';
import Header from './Header';

// If we wrap any tag with head then that particular tag will be move up to head tag automatically
import Head from 'next/head';

export default props => {
	return (
		<div>
			<Container>
				<Head>
					<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
				</Head>
				<Header />
				{props.children}
			</Container>
		</div>
	);
};