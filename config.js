const path = require("path");

const config = {
  sassCompiler: {
    file: path.resolve("public/styles/main.scss"),
    outFile: path.resolve("public/css/main.css"),
    includePath: "node_modules",
  },
};

module.exports = config;
