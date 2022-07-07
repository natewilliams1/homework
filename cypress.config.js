const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://getcloudapp.com/',

    retries: {
      // Configure retry attempts for `cypress run`
      // Default is 0
      "runMode": 3,
      // Configure retry attempts for `cypress open`
      // Default is 0
      "openMode": 3
    }
  },
})
