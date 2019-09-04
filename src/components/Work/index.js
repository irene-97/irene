import React from 'react';
import './index.scss';

export default class Work extends React.Component {
	render() {
		const {href, year, image, alt, text, plateText, hidden} = this.props;

		return (
			<a className={'work' + (hidden ? ' hidden' : '')} href={href}>
				<img src={image.src} alt={alt}/>
				<p>{text}</p>
				<span>{year}</span>
			</a>
		);
	}
}
