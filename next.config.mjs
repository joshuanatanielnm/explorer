/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/cosmos/chain-registry/**",
      },
    ],
  },
};

export default nextConfig;
