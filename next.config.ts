import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";
const nextConfig: NextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    poweredByHeader: false,
    output: "export",
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
    // GitHub Pages configuration
    basePath: isProduction ? "/WebPagesRefactor" : "",
    assetPrefix: isProduction ? "/WebPagesRefactor" : "",
};

export default nextConfig;
