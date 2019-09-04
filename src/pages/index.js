import React from 'react';
import {graphql, Link} from 'gatsby';
import '../styles/index.scss';
import Helmet from 'react-helmet';
import Header from '../components/Header';
import Works from '../components/Works';
import Contacts from '../components/Contacts';

export default class IndexPage extends React.Component {
	render() {
		return (
			<div id="app">
				<Helmet>
					<title>
						Projects Irinely
					</title>
					<meta name="description" content="Ирина Артемова. Портфолио веб-разработчика"/>
					<meta name="image" content="https://projects.irinely.art/images/share.jpg"/>
				</Helmet>
				<Header/>
				<Works/>
				<Contacts/>
			</div>
		);
	}
}
