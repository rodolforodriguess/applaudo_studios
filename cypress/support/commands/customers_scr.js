import { customerElements  } from '../elements/customers_elements'

Cypress.Commands.add('openTransactions', () => { 
    cy.get(customerElements.transactionsBtn)
        .should('be.visible')
        .click()
})

Cypress.Commands.add('depositMoney', (value) => {
    cy.get(customerElements.depositBtn)
        .should('be.visible')
        .click()
    cy.get(customerElements.input).type(value)
    cy.get(customerElements.submitBtn).click()
})

Cypress.Commands.add('withDrawlMoney', (value) => {
    cy.get(customerElements.withdrawalBtn)
        .should('be.visible')
        .click()
    cy.get(customerElements.input).type(value)
    cy.get(customerElements.submitBtn).click()
})