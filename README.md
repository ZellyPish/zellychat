# ✨ ZellyPish's React BoilerPlate

> React boilerplate with ❄Snowpack and 🚀Skypack CDN 

## Features:
- [Snowpack 3.0](https://www.snowpack.dev/), The faster frontend build tool.
- [Skypack CDN](https://www.skypack.dev/), Load optimized npm packages with no install and no build tools.
- @emotion/react, @emotion/styled for CSS-in-JS
- eslint and prettier

## Quick Start

1. `git clone --depth=1 https://github.com/ZellyPish/react-snowpack-boilerplate.git <YOUR_PROJECT_NAME>`
2. `cd <YOUR_PROJECT_NAME>`
3. `yarn` or `npm install`
4. `yarn start` or `npm start`

## How to:

### Adding Packages

searching Packages in [Skypack CDN](https://www.skypack.dev/)

open `snowpack.config.js`, edit below `imports:`

##### 👇for example

```js
imports: {
          // ...

          "react": true, // this will add React to our project

          // ...
        },
```

## Known Issues:
- HMR(Hot Module Replacement) not working [Related issue](https://github.com/snowpackjs/snowpack/discussions/2334)

## Todos:
- Unit testing
- Babel optimization
- and more