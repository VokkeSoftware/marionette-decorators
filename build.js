var babel = require("babel-core");
var fs = require("fs");
var UglifyJS = require("uglify-js-harmony");

babel.transformFile(__dirname + "/src/decorators.js", {
    "plugins": [
        "transform-runtime",
        "transform-es2015-block-scoping",
        "transform-decorators-legacy",
        "syntax-decorators",
        "transform-decorators"
    ],
    "presets": ["es2016"]
}, function(error, result) {
    fs.writeFileSync("build/index.js", result.code);
    var minify = UglifyJS.minify([__dirname + "/build/index.js"]);
    fs.writeFileSync("build/index.min.js", minify.code);
});