import { customerElements } from '../../support/elements/customers_elements'
import { managerElements } from '../../support/elements/manager_elements'

describe('Login in and log off', () => {
    beforeEach(() => {
        cy.openApp()
    })
    
    it('Login in with a customer account', () => {
        cy.openCustomerLogin()
        cy.loginCustomer('Hermoine Granger')
        cy.get(customerElements.transactionsBtn).should('be.visible')
    })

    it('Login in with manager account', () => {
        cy.loginManager()
        cy.get(managerElements.addCustomerBtn).should('be.visible')
    })

    it('Login in with customer and logout afterwards', () => {
        cy.openCustomerLogin()
        cy.loginCustomer('Hermoine Granger')
        cy.logout()
        cy.contains('Your Name')
    })

})