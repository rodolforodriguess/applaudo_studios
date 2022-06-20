import addContext from 'mochawesome/addContext'
import './commands/home_scr'
import './commands/customers_scr'
import './commands/manager_scr'
import './commands/transactions_scr'

Cypress.on('test:after:run', (test, runnable) => {
    if (test.state == 'failed') {
      addContext({ test }, `../reports/screenshots/${Cypress.spec.name}/${runnable.parent.title} -- ${encodeURIComponent(test.title)} (failed).png`)
    } else {
      addContext({ test }, `../reports/screenshots/${Cypress.spec.name}/${encodeURIComponent(test.title)} -- (passed).png`)
    }
  })
  

