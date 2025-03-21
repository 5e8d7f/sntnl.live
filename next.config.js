const { withContentlayer } = require("next-contentlayer2");

import("./env.mjs");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.discordapp.com",
      },
      {
        protocol: "https",
        hostname: "randomuser.me"
      }
    ],
  },
  redirects: async () => {
    return [
      {
        source: "/invite",
        destination: "https://discord.com/oauth2/authorize?client_id=1245512724256129086&permissions=8&scope=bot",
        permanent: false,
      },
      {
        source: "/support",
        destination: "https://discord.gg/8Ck7MMQsJf",
        permanent: false,
      }
    ];
  },
  experimental: {
    serverComponentsExternalPackages: ["@prisma/client"],
  },
  env: {
    BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
  }
};

module.exports = withContentlayer(nextConfig);
