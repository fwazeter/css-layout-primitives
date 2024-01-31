module.exports = {
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					// Creates `style` nodes from JS strings
					"style-loader",
					// Compiles Sass to CSS
					"sass-loader"
				]
			}
		]
	}
}