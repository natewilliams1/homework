/// <reference types="Cypress" />

describe('Login', () => {
    beforeEach(() => {
        cy.clearLocalStorage()
        cy.clearCookies()
        cy.visit('/login')
        cy.log('checking for login button')
        cy.get('[data-testid=regular-login-submit]').as('loginButton').should('be.visible')
        cy.log('checking for email field')
        cy.get('[id=email]').as('emailField').should('be.visible')
        cy.log('checking for password field')
        cy.get('[id=password]').as('passwordField').should('be.visible')
    })

    it('Logs in with valid credentials', () => {
        cy.get('@emailField').focus().type('nmwilliams87+ca@gmail.com')
        cy.get('@passwordField').focus().type('Test1234')
        cy.get('@loginButton').click()
        cy.log('checking for account icon')
        .get('body > #sidebar-layout-wrapper > #content > .alert-message').should('contain', 'Welcome back!')  
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
        cy.url().should('not.contain', 'https://share.getcloudapp.com/dashboard')
        cy.get('body > .container > .alert:nth-child(3)').should('be.visible').and('contain', 'Invalid email / password combination')
    })
})