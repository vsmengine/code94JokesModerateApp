const { createProxyMiddleware, fixRequestBody } = require('http-proxy-middleware');
const MODERATE_API_KEY = 'localhost_4300';

module.exports = (app) => {
  app.use(
    '/api',
    createProxyMiddleware({
        target: 'http://jokesSubmitApp:4100',
        changeOrigin: true,
        secure: false,
        logLevel: "debug",
        router: async (req) => {
          return 'http://jokesSubmitApp:4100/api';
        },
        on: {
            // proxyReq: fixRequestBody,
            proxyReq: (proxyReq, req, res) => {
              /* handle proxyReq */
              if (req.headers['authorization']) {
                proxyReq.setHeader('Authorization', req.headers['authorization']);
              }
              proxyReq.setHeader('x-api-key', MODERATE_API_KEY);
              return fixRequestBody(proxyReq, req);
            },
            proxyRes: (proxyRes, req, res) => {
              /* handle proxyRes */
            },
            error: (err, req, res) => {
              /* handle error */
            },
        }
    })
  );
};
