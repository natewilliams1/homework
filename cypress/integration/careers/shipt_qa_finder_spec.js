/// <reference types="Cypress" />

describe('Finds a qa job', () => {
    beforeEach(() => {
        cy.visit('careers/')
        cy.log('checking for openings button')
        cy.get(':nth-child(6) > .button-primary').as('openingsButton').should('be.visible')
        cy.log('checking for login button')
        cy.get('.button-secondary').as('loginButton').should('be.visible')
        cy.log('checking for sign up button')
        cy.get(':nth-child(2) > :nth-child(1) > .button-primary').as('signUpButton').should('be.visible')
    })

    it('navigates to openings and looks for a qa job', () => {
        cy.get('@openingsButton').click()
        cy.log('checking for Senior QA Engineer job opening')
        cy.get('.entry-content').should('contain', 'Senior QA Engineer')

        // cy.get('#card-number-input > .__PrivateStripeElement > iframe').click().type('4111111111111111')
        // cy.get('#card-exp-input').focus().type('05/22')
        // cy.get('#card-cvc-input').focus().type('123')
        // cy.get('#card-zip-input').focus().type('35023')
        // cy.get('#purchase-gift-subscription-button').focus().click()
        // cy.url().should('be.visible')
    })
})

