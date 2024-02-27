const { defineConfig } = require("cypress");

module.exports = defineConfig({
  project: "./",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
