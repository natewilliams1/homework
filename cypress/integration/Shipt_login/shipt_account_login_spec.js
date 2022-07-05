/// <reference types="Cypress" />

describe('Login', () => {
    beforeEach(() => {
        cy.clearLocalStorage()
        cy.clearCookies()
        cy.visit('/login')
        cy.log('checking for login button')
        cy.get('[data-test=LoginForm-log-in-button]').as('loginButton').should('be.visible')
        cy.log('checking for email field')
        cy.get('[data-test=LoginForm-emailField]').as('emailField').should('be.visible')
        cy.log('checking for password field')
        cy.get('[data-test=LoginForm-passwordField]').as('passwordField').should('be.visible')
        cy.log('checking for forgot password link')
        cy.get('a').contains('Forgot Password?').as('forgotPasswordField').should('have.attr', 'href', 'https://app.shipt.com/password_resets/new')
        
    })
    it('Logs in with valid credentials', () => {
        cy.get('@emailField').focus().type('nmwilliams87@gmail.com')
        cy.get('@passwordField').focus().type('Test123')
        cy.get('@loginButton').click()
        cy.log('checking for account icon')
        cy.get('[data-test=account-icon]').should('be.visible')
        cy.log('checking for account link')
        cy.get('.db-m > .body-3').should('contain', 'Account')
        
    })

    it('Prevents Login with invalid credentials', () => {
        cy.server()
        cy.route({
            method: 'POST',
            url: '**/auth/**',
            status: 401
        }).as('loginFail')
        cy.get('@emailField').focus().type('auth@test.comzzz')
        cy.get('@passwordField').focus().type('Beepbopboob123')
        cy.get('@loginButton').click()
        cy.wait(1000)
        cy.url().should('not.contain', 'https://shop.shipt.com/#/app/home')
        cy.get('[data-test="LoginForm-error"]').should('be.visible').and('contain', 'Invalid Username or Password')
    })
})