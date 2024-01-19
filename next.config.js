/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
	reactStrictMode: false,
	swcMinify: true,
	optimizeFonts: true,
	images: {
		domains: ['127.0.0.1', 'https://kick-flip-ui.vercel.app'],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**',
				port: '',
				pathname: '**',
			},
		],
	},
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
};

module.exports = nextConfig;
