// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

Cypress.Commands.add('generateFixture', () => {
    const faker = require('faker')

    cy.writeFile('cypress/fixtures/stories.json', {
        'hits':Cypress._.times(20, () => {
          return {
            'title':`${faker.lorem.words(3)}`,
            'url':`${faker.internet.url()}`,
            'author':`${faker.name.firstName()} ${faker.name.lastName()}`,
            'num_comments':`${faker.datatype.number()}`,
            'points':`${faker.datatype.number()}`,
            'objectID':`${faker.datatype.uuid()}`,
          }
        })
      })
    })

// Alternatively you can use CommonJS syntax:
// require('./commands')
