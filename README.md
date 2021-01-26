![license badge](https://img.shields.io/github/license/ZellyPish/react-snowpack-boilerplate) ![David](https://img.shields.io/david/zellypish/react-snowpack-boilerplate) ![David dev](https://img.shields.io/david/dev/zellypish/react-snowpack-boilerplate) ![PR badge](https://img.shields.io/badge/PR-Welcomes-red)

# ✨ ZellyPish's React BoilerPlate

> PWA available React boilerplate with ❄Snowpack and 🚀Skypack CDN

## Features:
- Progressive Web App is Available
- [Snowpack 3.0](https://www.snowpack.dev/), The faster frontend build tool.
- [Skypack CDN](https://www.skypack.dev/).
- [Jest](https://jestjs.io/), delightful JavaScript Testing Framework with a focus on simplicity.
- [Redux Toolkit](https://redux-toolkit.js.org/) for state management
- [TailwindCSS](https://tailwindcss.com/), utility-first CSS framework
- @emotion/react, @emotion/styled for CSS-in-JS
- eslint and prettier

## Quick Start

1. `git clone --depth=1 https://github.com/ZellyPish/react-snowpack-pwa.git <YOUR_PROJECT_NAME>`
2. `cd <YOUR_PROJECT_NAME>`
3. `yarn` or `npm install`
4. `yarn start` or `npm start`

### Build
- `yarn build` or `npm build`

## How to:

### Adding Packages

searching Packages in [Skypack CDN](https://www.skypack.dev/)

open `snowpack.config.js`, edit below `imports:`

##### 👇for example

```js
// snowpack.config.js

// ...
{
  imports: {
            // ...

            "redux": true, // this will add Redux to our project

            // ...
          },
},
// ...
```

## Known Issues:
- HMR(Hot Module Replacement) not working [Related issue](https://github.com/snowpackjs/snowpack/discussions/2334)
