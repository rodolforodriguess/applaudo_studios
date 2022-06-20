import { homeElements } from '../elements/home_elements'
import { customerElements } from '../elements/customers_elements'

Cypress.Commands.add('openApp', () => { 
    cy.visit(Cypress.env('url'))
    cy.title().should('eq', 'XYZ Bank') 
})

Cypress.Commands.add('openCustomerLogin', () => {
    cy.get(homeElements.customerBtn)
    .should('be.visible')
    .click()
})

Cypress.Commands.add('loginCustomer', (customerName) => { 
    cy.get(customerElements.selectCombo).select(customerName)
    cy.get(customerElements.loginBtn)
        .should('be.visible')
        .click()
})

Cypress.Commands.add('loginManager', () => { 
    cy.get(homeElements.managerBtn)
        .should('be.visible')
        .click()
})

Cypress.Commands.add('goHome', () => { 
    cy.get(homeElements.homeBtn)
        .should('be.visible')
        .click()
})