const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '9pnr1q',
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    projectId: '9pnr1q',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      this.screenshotOnRunFailure=true;
    },
  },
});
