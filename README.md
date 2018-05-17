# electron-react-mobx-boilerplate

[![Known Vulnerabilities](https://snyk.io/test/github/niederschlag/electron-react-mobx-boilerplate/badge.svg?targetFile=package.json)](https://snyk.io/test/github/niederschlag/electron-react-mobx-boilerplate?targetFile=package.json)
[![dependencies Status](https://david-dm.org/niederschlag/electron-react-mobx-boilerplate/status.svg)](https://david-dm.org/niederschlag/electron-react-mobx-boilerplate)
[![devDependencies Status](https://david-dm.org/niederschlag/electron-react-mobx-boilerplate/dev-status.svg)](https://david-dm.org/niederschlag/electron-react-mobx-boilerplate?type=dev)
[![Build Status](https://travis-ci.com/niederschlag/electron-react-mobx-boilerplate.svg?branch=master)](https://travis-ci.com/niederschlag/electron-react-mobx-boilerplate)
[![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovateapp.com/)

[![forthebadge](https://forthebadge.com/images/badges/powered-by-electricity.svg)](https://forthebadge.com)

A minimal boilerplate to get started with [Electron](http://electron.atom.io/), [React](https://facebook.github.io/react/) and [MobX](https://mobx.js.org/).

Including:
* [Electron Packager](https://github.com/electron-userland/electron-packager)
* [Electron DevTools Installer](https://github.com/MarshallOfSound/electron-devtools-installer)
* [Devtron](https://github.com/electron/devtron)
* [Babel](https://babeljs.io/)
* [Webpack](https://webpack.js.org/)
* [ESLint](https://eslint.org/) (with [Airbnb's style guide](https://github.com/airbnb/javascript))
* [Styled Components](https://www.styled-components.com/)
* [Flow](https://flow.org/)
* [Jest](https://facebook.github.io/jest/)
* [Enzyme](http://airbnb.io/enzyme/)

## Quick start

Clone the repository
```bash
git clone https://github.com/niederschlag/electron-react-mobx-boilerplate.git
```

Install dependencies
```bash
cd electron-react-mobx-boilerplate
yarn install
```

Development
```bash
yarn dev
```

## DevTools

Toggle DevTools:

* OSX: <kbd>Cmd</kbd> <kbd>Alt</kbd> <kbd>I</kbd> or <kbd>F12</kbd>
* Linux: <kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>I</kbd> or <kbd>F12</kbd>
* Windows: <kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>I</kbd> or <kbd>F12</kbd>

## Packaging

Modify [electron-builder.yml](./electron-builder.yml) to edit package info.

For a full list of options see: https://github.com/electron-userland/electron-builder/wiki/Options.

Create a package for OSX, Windows and Linux
```
yarn build
```

## Tests

```
yarn test
```

## Stuff which is nice to have
- [ ] Code quality management (Codefactor / StyleCI)
- [ ] Consider adding mobx-remotedev
