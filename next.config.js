const nextConfig = {
	output: "export",
	images: {
		unoptimized: true,
		domains: [
			"res.cloudinary.com",
			// add other domains if needed
		],
	 remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
	},
	trailingSlash: true,
};
module.exports = nextConfig;
