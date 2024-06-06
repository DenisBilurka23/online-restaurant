/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['images.pexels.com', 'pngfre.com', 'files.edgestore.dev']
	},
	typescript: {
		ignoreBuildErrors: true
	},
	env: {
		BASE_URL: process.env.BASE_URL || 'http://localhost:3000'
	}
}

module.exports = nextConfig
