/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "s.gravatar.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
  // async redirects() {
  //   return [
  //     {
  //       source: "/client",
  //       destination: "/",
  //       permanent: true,
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
