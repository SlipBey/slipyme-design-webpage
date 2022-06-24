/* eslint-disable */
const { withPlugins } = require("next-compose-plugins");
const withImages = require("next-images");
const withPWA = require("next-pwa");

module.exports = withPlugins([withImages, withPWA], {
	reactStrictMode: true,
	poweredByHeader: false,
	trailingSlash: true,
	pwa: {
		dest: "public",
		register: true,
		skipWaiting: true,
	},
	async redirects() {
		return [
			{
				source: "/github",
				destination: "https://slipyme.xyz/github",
				permanent: true,
			},
			{
				source: "/instagram",
				destination: "https://slipyme.xyz/instagram",
				permanent: true,
			},
			{
				source: "/youtube",
				destination: "https://slipyme.xyz/youtube",
				permanent: true,
			},
			{
				source: "/discord",
				destination: "https://slipyme.xyz/discord",
				permanent: true,
			},
			{
				source: "/source-code",
				destination:
					"https://github.com/SlipBey/slipyme-design-webpage",
				permanent: true,
			},
		];
	},
});
