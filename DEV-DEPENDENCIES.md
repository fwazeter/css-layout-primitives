# Development Dependencies Used

## node-sass

Node sass binds node.js to LibSass. It compiles .scss files to CSS through the middleware connecting Sass's C version of it's preprocessor.

## webpack

Webpack is an asset bundler that compiles and bundles JS, CSS and various project code together.
[Direct link to documentation is here](https://webpack.js.org/concepts/).

## webpack-cli

webpack CLI is the official CLI of webpack. [Documentation is here](https://www.npmjs.com/package/webpack-cli).

## sass-loader

Loads a SCSS file and compiles it to CSS for use with webpack.

## style-loader

Webpack config for injecting CSS into the DOM. For specific configurations check out webpack's [style-loader documentation](https://webpack.js.org/loaders/style-loader/)

Example:

### style.css
```css
body {
    background: green;
}
```

### component.js
```js
import "./style.css";
```

### webpack.config.js
```js
// "sass-loader" is the CSS loader alt. "css-loader"

module.exports = {
	module: {
		rules: [
			{
				test: /\.css$/i,
                use: ["style-loader", "sass-loader"]
            }
        ]
    }
}
```