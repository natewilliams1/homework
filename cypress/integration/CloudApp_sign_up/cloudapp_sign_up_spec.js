/// <reference types="Cypress" />
const faker = require('faker');

let userData = {
    randomName: faker.name.findName(),
    randomEmail: faker.internet.email(),
    randomPassword: faker.random.number()
}

describe('Signup', () => {
    beforeEach(() => {
        cy.clearLocalStorage()
        cy.clearCookies()
        cy.visit('signup')
        cy.on('uncaught:exception', (err, runnable) => {
            expect(err.message).to.include('is not defined')
              done()
              return false
            });
        cy.log('checking for signup button')
        cy.get('[data-testid=regular-signup-submit]').as('signupButton').should('be.visible')
        cy.log('checking for email field')
        cy.get('[id=email]').as('emailField').should('be.visible')
        cy.log('checking for password field')
        cy.get('[id=password]').as('passwordField').should('be.visible')
    })

    it('Signup successful with valid credentials', () => {
        cy.get('@emailField').focus().type(faker.internet.email())
        cy.get('@passwordField').focus().type('Test1234')
        cy.get('@signupButton').click()
        cy.log('checking for onboarding message')
        cy.get('div > #onboarding-content > .row > .col-12 > .download-cta-title').should('be.visible') 
        cy.visit('https://share.getcloudapp.com/dashboard')
        cy.get('[id=main-menu]').click()
        cy.wait(1000)
        cy.get('[data-testid=dropdown-link-sign_out]').click()
        cy.log('checking for correct url')
        cy.url().should('not.contain', 'https://share.getcloudapp.com/dashboard')
    })
})