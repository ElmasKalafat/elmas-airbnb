/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com"],
  },
  env: {
    mapbox_key:
      "pk.eyJ1IjoiZ29rbWVuMSIsImEiOiJjbGsyOWNzNDEwOTRqM2VvZjJnOWl5cXJyIn0.6bMgY1Yjpxsn_TGY92tplw",
  },
};

module.exports = nextConfig;
