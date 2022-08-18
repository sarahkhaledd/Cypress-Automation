let checkoutPage = 'https://www.saucedemo.com/checkout-complete.html'
, cartPage ='https://www.saucedemo.com/cart.html' ,
infoPage = 'https://www.saucedemo.com/checkout-step-one.html'
function checkOut(name,last,postalCode)
{
  cy.get('[data-test="checkout"]').click()
  cy.get('[data-test="firstName"]').type(name)
  cy.get('[data-test="lastName"]').type(last)
  cy.get('[data-test="postalCode"]').type(postalCode)
  cy.get('[data-test="continue"]').click()
  cy.get('[data-test="finish"]').click()
  cy.url().should('be.equal', checkoutPage)
}

describe('Swag Labs Login Test Scenarios', () => {
  //Correct Checkout Process 
  it('Positive Checkout Process Scenario', () => {
    cy.login('performance_glitch_user', 'secret_sauce')
    cy.addToCart()
    checkOut("sarah","khaled","8655")
  })
  //empty information fields for Checkout Process 
  it('Negative Checkout Process Scenario', () => {
    cy.login('performance_glitch_user', 'secret_sauce')
    cy.addToCart()
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="continue"]').click()
    cy.url().should('be.equal', infoPage)
  })
  //empty items then Checkout
  it('Negative Checkout Process Scenario', () => {
    cy.login('performance_glitch_user', 'secret_sauce') 
    cy.get('.shopping_cart_link').click()
    cy.get('[data-test="checkout"]').click().url().should('be.equal', cartPage)

  })
})