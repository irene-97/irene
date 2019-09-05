import React from 'react';
import './index.scss';

export default class Work extends React.Component {
	render() {
		const {href, year, image, alt, text, plateText, hidden} = this.props;

		return (
			<a className={'work' + (hidden ? ' hidden' : '')} href={href} target="_blank">
				<img src={image.src} alt={alt}/>
				<p>{text}</p>
				<span className="work__year">{year}</span>
				<span className="work__plate">{plateText}</span>
			</a>
		);
	}
}
