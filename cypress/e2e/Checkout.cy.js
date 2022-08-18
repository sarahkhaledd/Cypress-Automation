import { login } from "./login.cy";
import { addAndRemoveToCard } from "./item-card.cy";

function checOut(name,lastName,postalCode)
{
  cy.get('[data-test="checkout"]').click()
  cy.get('[data-test="firstName"]').type(name)
  cy.get('[data-test="lastName"]').type(lastName)
  cy.get('[data-test="postalCode"]').type(postalCode)
  cy.get('[data-test="continue"]').click()
  cy.get('[data-test="finish"]').click()
  cy.url().should('be.equal', 'https://www.saucedemo.com/checkout-complete.html')
}

describe('Swag Labs Login Test Scenarios', () => {
  //Correct Checkout Process 
  it('Positive Checkout Process Scenario', () => {
    login('performance_glitch_user', 'secret_sauce')
    addAndRemoveToCard(1)
    checOut("sarah","khaled","8655")
  })
  //empty information for Checkout Process 
  it('Negative Checkout Process Scenario', () => {
    login('performance_glitch_user', 'secret_sauce')
    addAndRemoveToCard(1)
    checOut(' ',' ',' ')
  })
})