import { customerElements } from '../../support/elements/customers_elements'
import { transactionElements } from '../../support/elements/transactions_elements'

describe('Perform and check transactions', () => {

    beforeEach(() => {
        cy.openApp()
        cy.openCustomerLogin()
        cy.loginCustomer('Hermoine Granger')
        cy.get(customerElements.transactionsBtn).should('be.visible') 
    })

    it('should make a deposit and check the transaction', () => {
        let amount = Math.floor(Math.random() * 10001)
        cy.depositMoney(amount)
        cy.contains('Deposit Successful')
        cy.openTransactions()
        cy.get(transactionElements.fieldsTable).should('be.visible')
        cy.get(transactionElements.resetBtn).should('be.visible')
        cy.searchTransaction()
        cy.get(transactionElements.fieldsTable).should('contain', amount)
    })

    it('should make a withdrawal', () => {
        cy.get(customerElements.balance).invoke('text').then(txt => {
            cy.withDrawlMoney(txt / 2)
            cy.wrap(txt).as('balance')
        })
        cy.contains('Transaction successful')      
    })

    it('should check the transactions', () => {
        cy.openTransactions()
        cy.get(transactionElements.fieldsTable).should('be.visible')
        cy.get(transactionElements.resetBtn).should('be.visible')
    })

    it('should try to withdraw a value greater than balance', () => {
        cy.get(customerElements.balance).invoke('text').then(txt => {
            cy.wrap(txt).as('balance')
        })
        cy.get('@balance').then(balance => {
            let final = parseInt(balance)
            cy.withDrawlMoney(final + 1)
        })
        cy.contains('Transaction Failed. You can not withdraw amount more than the balance.')
    })

})