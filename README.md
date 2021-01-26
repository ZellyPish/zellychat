![license badge](https://img.shields.io/github/license/ZellyPish/react-snowpack-boilerplate) ![David](https://img.shields.io/david/zellypish/react-snowpack-boilerplate) ![David dev](https://img.shields.io/david/dev/zellypish/react-snowpack-boilerplate) ![PR badge](https://img.shields.io/badge/PR-Welcomes-red)

# ✨ ZellyPish's React BoilerPlate

> PWA available React boilerplate with ❄Snowpack and 🚀Skypack CDN

## Features:
- Progressive Web App Available
- [Snowpack 3.0](https://www.snowpack.dev/), The faster frontend build tool.
- [Skypack CDN](https://www.skypack.dev/), Load optimized npm packages with no install and no build tools.
- [Jest](https://jestjs.io/), delightful JavaScript Testing Framework with a focus on simplicity.
- [Redux Toolkit](https://redux-toolkit.js.org/) for state management
- @emotion/react, @emotion/styled for CSS-in-JS
- eslint and prettier

## Quick Start

1. `git clone --depth=1 https://github.com/ZellyPish/react-snowpack-boilerplate.git <YOUR_PROJECT_NAME>`
2. `cd <YOUR_PROJECT_NAME>`
3. `yarn` or `npm install`
4. `yarn start` or `npm start`

### Build
- `yarn build` or `npm build`

## How to:

### Adding Packages

1. search Packages in [Skypack CDN](https://www.skypack.dev/)
2. `npm pkginstall <PACKAGE_NAME>` or `yarn pkginstall <PACKAGE_NAME>`

## Known Issues:
- HMR(Hot Module Replacement) not working [Related issue on snowpack github](https://github.com/snowpackjs/snowpack/discussions/2334)
- Package which has `@` symbol at the beginning of package name(like @emotion/react) isn't install correctly [Related discussion on snowpack github](https://github.com/snowpackjs/snowpack/discussions/2385)

#### Package Install Quick Fix

after `yarn pkginstall @emotion/react`, `snowpack.deps.json` has below codes.

```json
// snowpack.deps.json
{
  "dependencies": {
    "": "emotion/react"
  },
  "lock": {
    "#emotion/react": "@emotion/react@v11.1.4-0pm4g5UyI3uyXjpEWZEZ",
  }
}
```

Editing this codes to

```json
{
  "dependencies": {
    "@emotion/react": "^11.1.4"
  },
  "lock": {
    "@emotion/react#^11.1.4": "@emotion/react@v11.1.4-0pm4g5UyI3uyXjpEWZEZ"
  }
}
```
