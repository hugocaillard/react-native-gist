# React Native Gists

An iOS application made with React Native. Allowing to search, view and publish gists.
Made for an educational purpose (for some students of HETIC).

#### Based on [react-native-webpack-starter-kit](https://github.com/jhabdas/react-native-webpack-starter-kit)

## Requirements

- [Node](https://nodejs.org) 4.x or better
- [React Native](http://facebook.github.io/react-native/docs/getting-started.html) for development
- [Xcode](https://developer.apple.com/xcode/) for iOS development (optional)
- [Android SDK](https://developer.android.com/sdk/) for Android development (optional)
- [Android Lollipop](https://www.android.com/versions/lollipop-5-0/) or better for Android device testing (optional)

## Stack

- [React Native](http://facebook.github.io/react-native/) for native app development
- [Babel](http://babeljs.io/) for ES6+ support
- [Webpack](https://webpack.github.io/) module loader and bundler

## Installation

Start by cloning this repo and installing dependencies:

```sh
git clone https://github.com/hugocaillard/react-native-gist && cd $_
npm install # or simply npm i
```

## Running

Once dependencies are installed, run the kit with:

```sh
npm start
```

This will start a [Webpack Dev Server](https://github.com/webpack/webpack-dev-server) and React Packager. The dev server will watch your JS files for changes and automatically lint and generate the `index.[platform].js` files expected by your React Native iOS or Android app.
