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

    it('Logs in and updates profile avatar', () => {
        const p = 'Picture.jpg'
        cy.get('@emailField').focus().type('nmwilliams87+ca@gmail.com')
        cy.get('@passwordField').focus().type('Test1234')
        cy.get('@loginButton').click()
        cy.log('checking for account icon')
        cy.get('[id=main-menu]').click()
        cy.get('[data-testid=dropdown-link-settings]').click()
        cy.log('checking for correct url')
        cy.get('[data-testid=profile-settings]').click()
        cy.get('#profile > div > form > .form-group > #user_avatar').click()
        cy.log('upload file to the input field')
        cy.log('click on the upload button')
        cy.get('#profile > div > form > .form-group > #user_avatar').attachFile(p)
        cy.get('#profile > div > form > .form-group > .btn').click()
        cy.log('checking for success message')
        cy.get('#b-toaster-top-center > .b-toaster-slot > #\__BVID__6__toast_outer > #\__BVID__6 > .toast-body').should('be.visible').and('contain', 'Account updated successfully') 
        cy.get('[id=main-menu]').click()
        cy.get('[data-testid=dropdown-link-sign_out]').click()
        cy.log('checking for correct url')
        cy.url().should('not.contain', 'https://share.getcloudapp.com/dashboard')
    })
    it('Logs in and fails to update profile avatar', () => {
        const r = 'Resume.pdf'
        cy.get('@emailField').focus().type('nmwilliams87+ca@gmail.com')
        cy.get('@passwordField').focus().type('Test1234')
        cy.get('@loginButton').click()
        cy.log('checking for account icon')
        cy.get('[id=main-menu]').click()
        cy.get('[data-testid=dropdown-link-settings]').click()
        cy.log('checking for correct url')
        cy.get('[data-testid=profile-settings]').click()
        cy.get('#profile > div > form > .form-group > #user_avatar').click()
        cy.log('upload file to the input field')
        cy.log('click on the upload button')
        cy.get('#profile > div > form > .form-group > #user_avatar').attachFile(r)
        cy.get('#profile > div > form > .form-group > .btn').click()
        cy.log('checking for failure message')
        cy.get('body > #sidebar-layout-wrapper > #content > .alert-danger').should('be.visible').and('contain', 'Avatar must be an image') 
        cy.get('[id=main-menu]').click()
        cy.get('[data-testid=dropdown-link-sign_out]').click()
        cy.log('checking for correct url')
        cy.url().should('not.contain', 'https://share.getcloudapp.com/dashboard')
    })
})