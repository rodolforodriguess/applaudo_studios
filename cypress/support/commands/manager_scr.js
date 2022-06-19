import { managerElements } from '../elements/manager_elements'

Cypress.Commands.add('createCustomer', (fName, lName, pCode) => { 
    cy.get(managerElements.addCustomerBtn)
        .should('be.visible')
        .click()
    cy.get(managerElements.fNameCustomer)
        .should('be.visible')
        .type(fName)
    cy.get(managerElements.lNameCustomer)
    .should('be.visible')
    .type(lName)
    cy.get(managerElements.pCodeCustomer)
    .should('be.visible')
    .type(pCode)
    cy.get(managerElements.submitBtn).click()
})

Cypress.Commands.add('openAccount', (customerName, currency) => {
    cy.get(managerElements.openAccountBtn)
        .should('be.visible')
        .click()
    cy.get(managerElements.customerSelect)
        .should('be.visible')
        .select(customerName)
    cy.get(managerElements.currencySelect)
        .should('be.visible')
        .select(currency)
    cy.get(managerElements.submitBtn)
        .should('be.visible')
        .click()
})

Cypress.Commands.add('deleteCustomerByName', (customerName) => { 
    cy.get(managerElements.customersBtn)
        .should('be.visible')
        .click()
    cy.get(managerElements.searchCustomer)
        .should('be.visible')
        .type(customerName)
    cy.get(managerElements.tableCustomers).first().find('td').eq(0).invoke('text').then((txt) => {
        cy.wrap(txt).as('fName')
    })
    cy.get(managerElements.tableCustomers).first().find('td').eq(0).invoke('text').then((txt) => {
        cy.wrap(txt).as('lName')
    })
    cy.get('@fName').then((first) => {
        cy.get('@lName').then((last) => {
            if(first === customerName){
                cy.get(managerElements.deleteBtn).click()
            }
        })
    })
})