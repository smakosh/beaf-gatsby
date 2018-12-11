const config = require('./data/config')

require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
	siteMetadata: {
		title: 'BEAF - share you Before/After moments with the world!',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		/* {
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `${__dirname}/src/images`,
			},
		}, */
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		'gatsby-plugin-styled-components',
		{
			resolve: 'gatsby-plugin-mailchimp',
			options: {
				endpoint: process.env.MC_ENDPOINT,
			},
		},
		{
			resolve: 'gatsby-plugin-canonical-urls',
			options: {
				siteUrl: 'https://beafapp.com'
			},
		},
		{
			resolve: 'gatsby-plugin-nprogress',
			options: {
				color: config.themeColor,
				showSpinner: false
			}
		},
		{
			resolve: 'gatsby-plugin-google-analytics',
			options: {
				trackingId: config.googleAnalyticsID,
				head: true
			}
		},
		{
			resolve: 'gatsby-plugin-google-fonts',
			options: {
				fonts: [
					'Questrial'
				]
			}
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'gatsby-starter-default',
				short_name: 'starter',
				start_url: '/',
				background_color: config.backgroundColor,
				theme_color: config.themeColor,
				display: 'minimal-ui',
				icon: './static/favicon/favicon.png', // This path is relative to the root of the site.
			},
		},
		// 'gatsby-plugin-offline'
	],
}
