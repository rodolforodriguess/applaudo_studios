import { transactionElements } from '../elements/transactions_elements'

Cypress.Commands.add('searchTransaction', () => { 
    cy.get(transactionElements.table).should('be.visible')
    cy.getDate('subtraction', 1).then((data) => {
        cy.get(transactionElements.startDate)
        .should('be.visible')
        .type(data)
    })
    cy.getDate('sum', 3).then((data) => {
        cy.get(transactionElements.endDate)
        .should('be.visible')
        .type(data)
    })
})

Cypress.Commands.add('goBack', () => { 
    cy.get(transactionElements.goBackBtn)
        .should('be.visible')
        .click()
})

Cypress.Commands.add('resetBtn', () => { 
    cy.get(transactionElements.resetBtn)
        .should('be.visible')
        .click()
})

Cypress.Commands.add('getDate', (operation, hoursOrMinutes) => { 
    let date1 = new Date()
    if(operation === 'subtraction'){
        date1.setHours(date1.getHours() - hoursOrMinutes)
    } else {
        date1.setMinutes(date1.getMinutes() + hoursOrMinutes)
    }
    let date2 = date1.toISOString()
    let date3 = date1.toLocaleDateString('en-US', {hour: '2-digit', minute: 'numeric', hour12: false})
    let finalDate = date2.slice(0, 10) + "T" + date3.slice(-5, date3.length)
    return finalDate
})


