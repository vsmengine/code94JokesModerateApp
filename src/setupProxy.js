const { createProxyMiddleware, fixRequestBody } = require('http-proxy-middleware');

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
            proxyReq: fixRequestBody,
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
