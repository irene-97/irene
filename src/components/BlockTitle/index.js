import React from 'react';
import './index.scss';

export default class BlockTitle extends React.Component {
	render() {
		const {title} = this.props;

		return (
			<h2 className="block-title">
				{title}
			</h2>
		);
	}
}
