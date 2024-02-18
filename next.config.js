const path = require("path")

const nextConfig = {
    sassOptions:{
		includePaths:[path.join(__dirname,"src/sass")],
        prepenData:'@import "main.sass" '
	},
}

module.exports = nextConfig
