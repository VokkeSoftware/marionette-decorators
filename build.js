var babel = require("babel-core");
var fs = require("fs");

babel.transformFile(__dirname + "/src/decorators.js", {
    "plugins": [
        "transform-runtime",
        "transform-decorators-legacy",
        "syntax-decorators",
        "transform-decorators"
    ],
    "presets": ["es2016"]
}, function(error, result) {
    fs.writeFile("build/index.js", result.code);
});