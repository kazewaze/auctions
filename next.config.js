const securityHeaders = [
    {
      key: 'X-Content-Type-Options',
      value: 'nosniff'
    },
    {
      key: 'X-DNS-Prefetch-Control',
      value: 'on'
    },
    {
      key: 'X-XSS-Protection',
      value: '1; mode=block'
    },
    {
      key: 'X-Frame-Options',
      value: 'SAMEORIGIN'
    },
    {
      key: 'Permissions-Policy',
      value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
    },
    {
      key: 'Referrer-Policy',
      value: 'origin-when-cross-origin'
    }
  ];
  
  module.exports = {
    reactStrictMode: true,
    serverRuntimeConfig: {
        secret: process.env.SECRET
    },
    publicRuntimeConfig: {
        apiUrl: 'https://ronnieingramauctions.vercel.app/api'
    },
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: securityHeaders,
        },
      ]
    }
  };