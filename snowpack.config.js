/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: `/`,
    src: `/dist`,
  },
  plugins: [
    `@snowpack/plugin-react-refresh`,
    `@snowpack/plugin-webpack`,
    [
      `@snowpack/plugin-babel`,
      {
        input: [`.js`, `.mjs`, `.jsx`, `.ts`, `.tsx`],
      }
    ]
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    // bundle: true,
    // minify: true,
    // target: `es2021`,
  },
  packageOptions: {
    source: `remote`,
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
