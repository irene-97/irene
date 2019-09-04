import React, {useState} from 'react';
import './index.scss';
import BlockTitle from '../BlockTitle';
import {graphql, useStaticQuery} from 'gatsby';
import Work from '../Work';

export default function Works() {
	const [isAllVisible, setVisible] = useState(false);

	const data = useStaticQuery(graphql`
		{
			allWorksJson {
				edges {
					node {
						href
						year
						src {
							childImageSharp {
								fixed(width: 500) {
									src
								}
							}
						}
						alt
						text
						plateText
					}
				}
			}
		}
	`);

	return (
		<div id="works" className="works">
			<div className="container">
				<BlockTitle title="Работы"/>
				<div className="works__list">
					{data.allWorksJson.edges.map(({node}, index) =>
						<Work
							key={node.href}
							href={node.href}
							year={node.year}
							image={node.src.childImageSharp.fixed}
							alt={node.alt}
							text={node.text}
							plateText={node.plateText}
							hidden={!isAllVisible && index > 14}
						/>
					)}
				</div>
				{
					!isAllVisible && (
						<button type="button" onClick={() => setVisible(true)}>
							Показать ещё
						</button>
					)
				}
			</div>
		</div>
	);
};
