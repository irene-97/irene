import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './index.scss';

import hamburger from './images/hamburger.svg';
import arrow from './images/arrow-down-sign-to-navigate.svg';

export default class Header extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpen: false
		}
	}

	hamburgerClick = () => {
		this.setState((state) => ({
			isOpen: !state.isOpen
		}))
	};

	render() {
		return (
			<header className="header">
				<div className="container">
					<div className="header__wrapper">
						<div className="header__logo">
							<svg fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 333.06 47.03">
								<path className="logo__text" d="M0 0h10.34v47H0zM19.23.0h14.78a41.48 41.48.0 0 1 6.6.4 11 11 0 0 1 4.63 2.14 11.58 11.58.0 0 1 3.67 4.75 16.64 16.64.0 0 1 1.33 6.77q0 8.82-6.61 12.4l8.65 20.57H41.02l-6.29-18.6h-5.17v18.6H19.23zm10.33 7.62v13.2h4.55q6.06.0 6.06-6.79a7.4 7.4.0 0 0-.9-3.84 4.82 4.82.0 0 0-2.08-2 8.88 8.88.0 0 0-3.5-.53zM57.68.0h10.33v47H57.68zM76.56.0H88l12.09 29.22V0h8v47h-9.23l-14.3-34.01v34h-8zm40 0h28.6v8.06h-18.27v10.93h14.19v8.06h-14.19v11.57h18.26v8.41h-28.59zm33.66.0h10.34v38.22h15.16v8.82h-25.5zM171.65.0h11.38l6.64 17.14L196.77.0h10.09L193.8 27.15v19.88h-10.34V27.15z"></path>
								<circle fill="#0077b3" className="logo__dot" cx="213.41" cy="38.65" r="8.37"></circle>
								<path className="logo__text" d="M241.45.0h10.4l13.44 47h-10.57l-2.35-9.72h-13.24L236.82 47h-9.5zm9 29.25L245.7 9.98l-4.58 19.24zM269.22.0H284a41.48 41.48.0 0 1 6.6.4 11 11 0 0 1 4.63 2.14 11.58 11.58.0 0 1 3.67 4.75 16.65 16.65.0 0 1 1.33 6.77q0 8.82-6.61 12.4l8.65 20.57h-11.26l-6.29-18.6h-5.16v18.6h-10.34zm10.34 7.62v13.2h4.55q6.06.0 6.06-6.79a7.41 7.41.0 0 0-.9-3.84 4.82 4.82.0 0 0-2.08-2 8.88 8.88.0 0 0-3.5-.53zM303.74.0h29.32v8.82h-9.61v38.21h-10.34V8.82h-9.37z"></path>
							</svg>
						</div>
						<div className="header__navigation">
							<AnchorLink  href="#works">
								Работы
							</AnchorLink>
							<AnchorLink href="#contacts">
								Контакты
							</AnchorLink>
							<a className="active" href="https://irinely.art" target="_blank">
								Блог
							</a>
						</div>
						<button
							className="header__hamburger"
							type="button"
							onClick={this.hamburgerClick}
						>
							<img src={hamburger} alt="Меню"/>
						</button>
						<div className={'header__navigation-small' + (this.state.isOpen ? ' is-open' : '')}>
							<AnchorLink href="#works">
								Работы
							</AnchorLink>
							<AnchorLink href="#contacts">
								Контакты
							</AnchorLink>
							<AnchorLink href="https://irinely.art/" target="_blank">
								Блог
							</AnchorLink>
						</div>
					</div>
					<div className="header__title">
						Веб-разработка
					</div>
					<div className="header__subtitle">
						Адаптивная кроссбраузерная<br/>
						вёрстка сайтов
					</div>
					<div className="header__arrow bounce">
						<AnchorLink href="#works">
							<img src={arrow} alt="Вниз"/>
						</AnchorLink>
					</div>
				</div>
			</header>
		);
	}
}
