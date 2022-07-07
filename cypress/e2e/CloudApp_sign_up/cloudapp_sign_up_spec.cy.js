/// <reference types="Cypress" />

describe('Signup', () => {
    beforeEach(() => {
        cy.clearLocalStorage()
        cy.clearCookies()
        cy.visit('signup')
        cy.on('uncaught:exception', (err, runnable) => {
            expect(err.message).to.include('is not defined')
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
        const faker = require("faker")
        let email = faker.internet.email()
        cy.get('@emailField').focus().type(faker.internet.email())
        cy.get('@passwordField').focus().type('Test1234')
        cy.get('@signupButton').click()
        cy.log('checking for onboarding message')
        cy.get('div > #onboarding-content > .row > .col-12 > .download-cta-title').should('be.visible') 
        cy.visit('https://share.getcloudapp.com/dashboard')
        cy.get('[id=main-menu]').click()
        cy.get('[data-testid=dropdown-link-sign_out]').click()
        cy.log('checking for correct url')
        cy.url().should('not.contain', 'https://share.getcloudapp.com/dashboard')
    })

    it('Prevents Signup with existing credentials', () => {
        cy.get('@emailField').focus().type('nmwilliams87+cs@gmail.com')
        cy.get('@passwordField').focus().type('Test1234')
        cy.get('@signupButton').click()
        cy.log('checking for correct url')
        cy.url().should('not.contain', 'https://share.getcloudapp.com/dashboard')
        cy.log('checking for validation error')
        cy.get('body > .container > .alert-danger').should('be.visible').and('contain', 'Email has already been taken')
    })
})