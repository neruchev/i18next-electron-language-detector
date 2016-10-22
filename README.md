# Introduction

[![npm version](https://img.shields.io/npm/v/i18next-electron-language-detector.svg?style=flat-square)](https://www.npmjs.com/package/i18next-electron-language-detector)
[![dependencies](https://img.shields.io/david/neruchev/i18next-electron-language-detector.svg?style=flat-square)](https://david-dm.org/neruchev/i18next-electron-language-detector)
[![peerDependencies](https://img.shields.io/david/peer/neruchev/i18next-electron-language-detector.svg?style=flat-square)](https://david-dm.org/neruchev/i18next-electron-language-detector?type=peer)
[![downloads](https://img.shields.io/npm/dm/i18next-electron-language-detector.svg?style=flat-square)](http://npm-stat.com/charts.html?package=i18next-electron-language-detector)
[![MIT License](https://img.shields.io/npm/l/i18next-electron-language-detector.svg?style=flat-square)](http://opensource.org/licenses/MIT)


This is an [i18next](http://i18next.com/) language detection plugin which is used to determine user language in the [Electron.js](http://electron.atom.io/) application by applying an [app.getLocale()](http://electron.atom.io/docs/all/#appgetlocale) method.


## Installation

Source can be loaded via [npm](https://www.npmjs.com/package/i18next-electron-language-detector).

```
# npm package
$ npm install i18next-electron-language-detector
```


## Usage

```javascript
import i18next from 'i18next'
import LanguageDetector from 'i18next-electron-language-detector';

i18next
  .use(LanguageDetector)
  .init()
```

**Note**: On Windows you have to call it after the ready events gets emitted.