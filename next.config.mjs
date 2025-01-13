/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    experimental: {
        staleTimes: {
            dynamic: 0,
        }
    }
};

export default nextConfig;
