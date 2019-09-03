module.exports = {
	plugins: [
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		'gatsby-plugin-react-helmet',
		'gatsby-transformer-json',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'data',
				path: './data'
			}
		},
		'gatsby-plugin-sass'
	]
};
