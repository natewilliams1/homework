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
    })
})

