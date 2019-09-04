import React from 'react';
import './index.scss';
import BlockTitle from '../BlockTitle';

import placeholder from './images/placeholder.svg';
import envelope from './images/envelope.svg';
import gmail from './images/gmail.svg';
import vk from './images/vk.svg';
import githubLogo from './images/github-logo.svg';
import behance from './images/behance.svg';
import skype from './images/skype.svg';
import telegram from './images/telegram.svg';

export default class Contacts extends React.Component {
	render() {
		return (
			<div id="contacts" className="contacts">
				<div className="container">
					<BlockTitle title="Контакты"/>
					<div className="contacts__labels">
						<div className="city">
							<img src={placeholder} alt="Город"/>
							<div className="text">
								г. Ульяновск
							</div>
						</div>
						<div className="email">
							<img src={envelope} alt="Email"/>
							<div className="text">
								artemova.irene@gmail.com
							</div>
						</div>
					</div>
					<div className="contacts__links">
						<a href="mailto:artemova.irene@gmail.com" target="_blank" title="Gmail">
							<img src={gmail} alt="Gmail"/>
						</a>
						<a href="https://vk.com/irinely_art" target="_blank" title="Вконтакте">
							<img src={vk} alt="Вконтакте"/>
						</a>
						<a href="https://github.com/irinely" target="_blank" title="Github">
							<img src={githubLogo} alt="Github"/>
						</a>
						<a href="https://www.behance.net/irinely_art" target="_blank" title="Behance">
							<img src={behance} alt="Behance"/>
						</a>
						<a href="skype:irene_121997?chat" target="_blank" title="Skype">
							<img src={skype} alt="Skype"/>
						</a>
						<a href="https://t.me/irinely_art" target="_blank" title="Telegram">
							<img src={telegram} alt="Telegram"/>
						</a>
					</div>
				</div>
			</div>
		);
	}
}
