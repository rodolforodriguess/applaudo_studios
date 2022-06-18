Cypress.Commands.add('login', () => { 
    cy.visit(Cypress.env('url'))
    cy.url().should('contains', '/angularJs-protractor/BankingProject/#/login')
    cy.title().should('eq', 'XYZ Bank')
})