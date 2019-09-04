import React from 'react';
import './index.scss';

import cat from './images/cat.svg';

export default class Copyright extends React.Component {
	render() {
		const currentYear = new Date().getFullYear();

		return (
			<div className="copyright">
				<div className="container">
					<h3>© Ирина Артемова, г. Ульяновск, {currentYear}</h3>
				</div>
				<div className="cat">
					<img src={cat} alt="Irene Artemova"/>
				</div>
			</div>
		);
	}
}
