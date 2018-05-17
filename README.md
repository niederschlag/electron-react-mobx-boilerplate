# electron-react-mobx-boilerplate

[![Greenkeeper badge](https://badges.greenkeeper.io/niederschlag/electron-react-mobx-boilerplate.svg)](https://greenkeeper.io/)

[![Known Vulnerabilities](https://snyk.io/test/github/niederschlag/electron-react-mobx-boilerplate/badge.svg?targetFile=package.json)](https://snyk.io/test/github/niederschlag/electron-react-mobx-boilerplate?targetFile=package.json)
[![dependencies Status](https://david-dm.org/niederschlag/electron-react-mobx-boilerplate/status.svg)](https://david-dm.org/niederschlag/electron-react-mobx-boilerplate)
[![devDependencies Status](https://david-dm.org/niederschlag/electron-react-mobx-boilerplate/dev-status.svg)](https://david-dm.org/niederschlag/electron-react-mobx-boilerplate?type=dev)

## THIS PROJECT IS WIP
TODO:
- [x] Clone project
- [x] Tear everything apart
- [x] Tear Redux out
- [x] Again, check through all files and tear everything unnecessary out
- [x] Add Webpack
- [x] Add React hot reloading
- [x] Add Flow
- [x] Add proper linting
- [x] Add MobX
- [x] Add developer plugins (React, MobX, Devtron)
- [x] Add [styled components](https://www.styled-components.com/)
- [x] Add global scss file
- [x] Rearrange project structure (Components, Containers, Stores, States, Utils)
- [x] Add Jest + Enzyme
- [x] Fully [migrate from MobX 3 to 4](https://github.com/mobxjs/mobx/wiki/Migrating-from-mobx-3-to-mobx-4) 
- [x] Add Sass support (and CSS Modules support)
- [x] Set-up CI (Depends on "Add Jest + Enzyme")
- [ ] Set-up auto dependency update (Greenkeeper / Renovate) (Depends on "Set-up CI")
- [x] Set-up security management (Snyk)

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
