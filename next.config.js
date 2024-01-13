/** @type {import('next').NextConfig} */
const nextConfig = {

	images: {
		domains: ['images.pexels.com', 'pngfre.com']
	},
	env: {
		BASE_URL: 'http://localhost:3000'
	}

}

module.exports = nextConfig
