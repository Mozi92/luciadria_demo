const path = require('path');

module.exports = {
    mode: "development",
    devServer: {
        watchFiles: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        static: path.join(__dirname, "dist")
    }
};