const less = require("less");

module.exports = {
  outputFileExtension: "css",
  compile: async function (input, inputPath) {
    try {
      const output = await less.render(input);

      this.addDependencies(inputPath, output.imports);
      return async () => output.css;
    } catch(err) {
      console.error("Error compiling less:\n", err);
      throw err;
    }
  }
};
