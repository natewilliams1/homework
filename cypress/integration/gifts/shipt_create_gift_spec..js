/// <reference types="Cypress" />

describe('Create a gift', () => {
    beforeEach(() => {
        cy.visit('')
        cy.get('#interstitial-modal > .fancybox-button > svg').click()
        cy.log('checking for login button')
        cy.get('.button-secondary').as('loginButton').should('be.visible')
        cy.log('checking for sign up button')
        cy.get(':nth-child(2) > :nth-child(1) > .button-primary').as('signUpButton').should('be.visible')
        cy.log('checking for gift link')
        cy.get('.left > :nth-child(3)').as('giftButton').should('be.visible')
    })

    it('Creates a gift', () => {
        cy.get('@giftButton').click()
        cy.get('#payment-form-first-name').focus().type('Jon')
        cy.get('#payment-form-last-name').focus().type('Snow')
        cy.get('#payment-form-email').focus().type('jsnow@winterfell.north')

        cy.get('#card-number-input > .__PrivateStripeElement > iframe').click().type('4111111111111111')
        cy.get('#card-exp-input').focus().type('05/22')
        cy.get('#card-cvc-input').focus().type('123')
        cy.get('#card-zip-input').focus().type('35023')
        cy.get('#purchase-gift-subscription-button').focus().click()
        cy.url().should('be.visible')
    })
})

