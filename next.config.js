/** @type {import('next').NextConfig} */

// const ContentSecurityPolicy = `
//   script-src 'self' '${process.env.NODE_ENV === 'development' ? 'unsafe-eval' : ''}' 'nonce-2726c7f26c' https://www.googletagmanager.com;
//   font-src 'self';  
// `;

// <script nonce="" src=""></scirpt>
const securityHeaders = [
  // This response header converts HTTP requests to HTTPS which prevents man-in-the-middle attack
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload',
  },
  // {
  //   key: 'Content-Security-Policy',
  //   value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
  // },
];

const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;
