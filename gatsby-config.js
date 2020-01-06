module.exports = {
	siteMetadata: {
		title: "Marcin Jadwiżyc - Portfolio",
		description:
			"Cześć! Nazywam się Marcin Jadwiżyc. Zajmuję się kodowaniem stron internetowych i innych projektów webowych. Możesz tu obejrzeć moje projekty, dowiedzieć się o moim doświadczeniu, umiejętnościach i techonologiach w których pracuję. Zapraszam do kontaktu.",
		author: "Marcin Jadwiżyc"
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
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
