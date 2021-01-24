/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: "/",
    src: "/dist",
  },
  plugins: [
    // "@snowpack/plugin-webpack",
    "@snowpack/plugin-react-refresh",
    // "@snowpack/plugin-babel",
    [
      "snowpack-plugin-import-map",
      {
        imports: {
          "react": true,
          "react-dom": true,
          "@emotion/react": true,
          "@emotion/styled": true,
        },
      },
    ],
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    // bundle: true,
    // minify: true,
  },
  packageOptions: {
    source: "remote",
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
