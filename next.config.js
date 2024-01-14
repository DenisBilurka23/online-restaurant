/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['images.pexels.com', 'pngfre.com']
	},
	env: {
		BASE_URL: 'http://localhost:3000'
	},
	typescript: {
		ignoreBuildErrors: true
	}
}

module.exports = nextConfig
