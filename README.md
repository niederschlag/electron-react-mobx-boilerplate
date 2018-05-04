# electron-react-mobx-boilerplate

## THIS PROJECT IS A BIIIIG WIP
TODO:
- [x] Clone project
- [ ] Tear everything apart
- [ ] Tear Redux out
- [ ] Tear Babel out
- [ ] Again, check through all files and tear everything unnecessary out
- [ ] Add Webpack
- [ ] Add React hot reloading
- [ ] Add Flow
- [ ] Add proper linting
- [ ] Add MobX
- [ ] Add developer plugins (React, MobX, Devtron)
- [ ] Add Jest
- [ ] Add Sass support (and CSS Modules support)
- [ ] Set-up CI
- [ ] Set-up auto dependency update (Greenkeeper / Renovate)
- [ ] Set-up security management (Snyk)
- [ ] Set-up code quality management (Codefactor / StyleCI)

A minimal boilerplate to get started with [Electron](http://electron.atom.io/), [React](https://facebook.github.io/react/) and [MobX](https://mobx.js.org/).

//TODO: Tear apart
Including:

* [React Router](https://reacttraining.com/react-router/)
* [Redux Thunk](https://github.com/gaearon/redux-thunk/)
* [Redux Actions](https://github.com/acdlite/redux-actions/)
* [Redux Local Storage](https://github.com/elgerlambert/redux-localstorage/)
* [Electron Packager](https://github.com/electron-userland/electron-packager)
* [Electron DevTools Installer](https://github.com/MarshallOfSound/electron-devtools-installer)
* [Electron Mocha](https://github.com/jprichardson/electron-mocha)
* [Browsersync](https://browsersync.io/)

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
yarn package
```

Or target a specific platform
```
yarn package:mac
yarn package:win
yarn package:linux
```

## Tests

```
yarn test
```