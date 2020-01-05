module.exports = {
	siteMetadata: {
		title: "Marcin Jadwiżyc - Portfolio",
		description: ""
	},
	plugins: [
		`gatsby-plugin-sass`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images/`,
				ignore: [ `**/\.*` ] // ignore files starting with a dot
			}
		}
	]
};
