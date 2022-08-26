/* eslint-disable */
const { withPlugins } = require("next-compose-plugins");
const withImages = require("next-images");

module.exports = withPlugins([withImages], {
	reactStrictMode: true,
	poweredByHeader: false,
	trailingSlash: false,
	i18n: {
		locales: ["en", "tr"],
		defaultLocale: "tr",
	},
	async redirects() {
		return [
			{
				source: "/github",
				destination: "https://www.slipyme.com/github",
				permanent: true,
			},
			{
				source: "/instagram",
				destination: "https://www.slipyme.com/instagram",
				permanent: true,
			},
			{
				source: "/youtube",
				destination: "https://www.slipyme.com/youtube",
				permanent: true,
			},
			{
				source: "/discord",
				destination: "https://www.slipyme.com/discord",
				permanent: true,
			},
			{
				source: "/source-code",
				destination:
					"https://github.com/SlipBey/slipyme-design-webpage",
				permanent: true,
			},
			{
				source: "/admin",
				destination: "https://www.slipyme.com",
				permanent: true,
			},
		];
	},
});
