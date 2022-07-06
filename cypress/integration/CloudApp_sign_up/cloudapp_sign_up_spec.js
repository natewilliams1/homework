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
        cy.get('div > #onboarding-content > .row > .col-12 > .download-cta-title').should('contain', 'Record your first video') 
    })

    it('Prevents Login with invalid email credentials', () => {
        cy.server()
        cy.route({
            method: 'POST',
            url: '**/auth/**',
            status: 401
        }).as('loginFail')
        cy.get('@emailField').focus().type('Badcredentials@email.comz')
        cy.get('@passwordField').focus().type('test1234')
        cy.get('@signupButton').click()
        cy.wait(1000)
        cy.url().should('not.contain', 'https://share.getcloudapp.com/onboarding')
        cy.get('body > .container > .alert-danger').should('be.visible').and('contain', 'Validation failed')
    })
})