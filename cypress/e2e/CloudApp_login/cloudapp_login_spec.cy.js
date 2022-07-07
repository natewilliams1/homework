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

    it('Logs in with valid credentials and logs out', () => {
        cy.get('@emailField').focus().type('nmwilliams87+ca@gmail.com')
        cy.get('@passwordField').focus().type('Test1234')
        cy.get('@loginButton').click()
        cy.log('checking for account icon')
        cy.get('body > #sidebar-layout-wrapper > #content > .alert-message').should('be.visible')  
        cy.get('[id=main-menu]').click()
        cy.get('[data-testid=dropdown-link-sign_out]').click()
        cy.log('checking for correct url')
        cy.url().should('not.contain', 'https://share.getcloudapp.com/dashboard')
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
        cy.url().should('not.contain', 'https://share.getcloudapp.com/dashboard')
        cy.get('body > .container > .alert:nth-child(3)').should('be.visible').and('contain', 'Invalid email / password combination')
    })
})