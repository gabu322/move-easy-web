import { createProxyMiddleware } from 'http-proxy-middleware';

const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'https://account-manager-ms.fly.dev/api/:path*',
            },
        ];
    },
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback = {
                ...config.resolve.fallback,
                fs: false,
                module: false,
                child_process: false,
                net: false,
                tls: false,
            };
        }

        return config;
    },
};

export default nextConfig;
