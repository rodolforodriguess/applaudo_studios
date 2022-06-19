import { faker }  from '@faker-js/faker'
import { managerElements } from '../../support/elements/manager_elements'

describe('Perform manager operations', () => {

    beforeEach(() => {
        cy.openApp()
        cy.loginManager()
        cy.get(managerElements.openAccountBtn).should('be.visible')
    })

    it('should create an user', () => {
        const fisrtName = faker.name.firstName()
        const lastName = faker.name.lastName()
        const postCode = faker.address.zipCode()
        cy.createCustomer(fisrtName, lastName, postCode)
        cy.on('window:alert', (alert) => {
            expect(alert).to.contains('Customer added successfully with customer id :')
        })
    })

    it('should open an account', () => {
        cy.openAccount('Harry Potter', 'Pound')
        cy.on('window:alert', (alert) => {
            expect(alert).to.contains('Account created successfully with account Number :')
        })
    })

    it.only('should create and delete a customer', () => {
        const fisrtName = faker.name.firstName()
        const lastName = faker.name.lastName()
        const postCode = faker.address.zipCode()
        cy.createCustomer(fisrtName, lastName, postCode)
        cy.on('window:alert', (alert) => {
            expect(alert).to.contains('Customer added successfully with customer id :')
        })
        cy.goHome()
        cy.loginManager()
        cy.deleteCustomer(fisrtName + " " + lastName)
    })

    it('should delete the first customer of the list', () => {
        cy.deleteCustomer(fisrtName + " " + lastName)
        cy.deleteCustomer()
    })
})