const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://developer.marvel.com/",
    defaultCommandTimeout: 10000,
    execTimeout: 80000,
    pageLoadTimeout: 100000,
    requestTimeout: 10000,
    responseTimeout: 90000,
    taskTimeout: 60000,
    viewportHeight: 800,
    viewportWidth: 1440,
    'Content-Security-Policy': "frame-ancestors 'self'",
    experimentalSessionAndOrigin: true,
    experimentalModifyObstructiveThirdPartyCode: true,
    modifyObstructiveCode: false,
    experimentalInteractiveRunEvents: true,
    chromeWebSecurity: false,
    testIsolation: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
