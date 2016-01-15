# React Native Gists

An iOS application made with React Native. Allowing to search, view and publish gists.
Made for an educational purpose (for some students of HETIC).

#### Based on [react-native-webpack-starter-kit](https://github.com/jhabdas/react-native-webpack-starter-kit)

## Steps (branches)

- 0: *master* - Starter
- 1: *step-1* - Create the **navigator** (router) and the **Home** View with the users search (This implies the API calls) (**components/pages/Home.js** & **components/lib/gistAPI.js**)
- 2: *step-2* - Display the search results in a **ListView**, with an other component for the **User cell**. (**components/pages/Home.js** & **components/elements/User.js**)
- 3: *step-3* - Create the **User** View with some details and a list of Gists in a **ListView**, with an other component for the **Gist cell**. Link the Home et Users views (**components/pages/User.js** & **components/elements/GistCell.js**)
- 4: *step-4* - Add **Gist details view** and link it from the User view (**components/pages/Gist.js**)
- 5: *end* - Add a **modal** with a **WebView** to see the gist (**components/pages/Gist.js**) - The end.

## Structure of the React Native application

```
  src/
    components/
      elements/
        GistCell.js
        UserCell.js
      pages/
        Gist.js
        Home.js
        User.js
      App.js
```

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
