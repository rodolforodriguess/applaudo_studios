import { faker }  from '@faker-js/faker'
import { managerElements } from '../../support/elements/manager_elements'
import { customerElements } from '../../support/elements/customers_elements'

describe('Perform manager operations', () => {

    const fisrtName = faker.name.firstName()
    const lastName = faker.name.lastName()
    const postCode = faker.address.zipCode()

    beforeEach(() => {
        cy.openApp()
        cy.loginManager()
        cy.get(managerElements.openAccountBtn).should('be.visible')
    })

    it('should create an user', () => {
        cy.createCustomer(fisrtName, lastName, postCode)
        cy.on('window:alert', (alert) => {
            expect(alert).to.contains('Customer added successfully with customer id :')
        })
    })

    it('should create, delete a customer and check if it is not available to log in', () => {
        cy.createCustomer(fisrtName, lastName, postCode)
        cy.on('window:alert', (alert) => {
            expect(alert).to.contains('Customer added successfully with customer id :')
        })
        cy.deleteCustomerByName(fisrtName)
        cy.get(managerElements.tableCustomers).should('not.exist')
        cy.goHome()
        cy.openCustomerLogin()
        cy.get(customerElements.selectCombo).find('option').should('not.have.text', `${fisrtName} ${lastName}`)
    })

    it('should create a customer and open an account', () => {
        cy.createCustomer(fisrtName, lastName, postCode)
        cy.openAccount(fisrtName + " " + lastName, 'Pound')
        cy.on('window:alert', (alert) => {
            expect(alert).not.exist('Account created successfully with account Number :')
        })
    })

    it('should try to open the same kind of account twice for a customer', () => {
        cy.createCustomer(fisrtName, lastName, postCode)
        cy.openAccount(fisrtName + " " + lastName, 'Pound')
        cy.on('window:alert', (alert) => {
            expect(alert).not.to.exist()
        })
        cy.get(managerElements.submitBtn).should('be.disabled')
    })

    it('should have a balance equal to 0 for a new customer with a new account', () => {
        cy.createCustomer(fisrtName, lastName, postCode)
        cy.openAccount(fisrtName + " " + lastName, 'Pound')
        cy.goHome()
        cy.openCustomerLogin()
        cy.loginCustomer(`${fisrtName} ${lastName}`)
        cy.get(customerElements.transactionsBtn).should('be.visible')
        cy.get(customerElements.balance).invoke('text').should('equal', '0')
    })

})