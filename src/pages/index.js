import React from 'react';
import {graphql, Link} from 'gatsby';
import '../styles/index.scss';
import Helmet from 'react-helmet';

export default class IndexPage extends React.Component {
	render() {
		const {data: {allWorksJson: {edges}}} = this.props;

		return (
			<React.Fragment>
				<Helmet>
					<title>
						Projects Irinely
					</title>
					<meta name="description" content="Ирина Артемова. Портфолио веб-разработчика"/>
					<meta name="image" content="https://projects.irinely.art/images/share.jpg"/>
				</Helmet>
				<div className="container">
					123
				</div>
			</React.Fragment>
		);
	}
}

export const query = graphql`
	{
		allWorksJson {
			edges {
				node {
					id
					title
				}
			}
		}
	}
`;
