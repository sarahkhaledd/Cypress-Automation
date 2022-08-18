const cardPage = 'https://www.saucedemo.com/cart.html'

describe('Swag Labs Adding&removing items to the Cart Test Scenarios', () => {
  //add a item to the card & the card will has a one item
  it(' Add To Cart Scenario', () => {
    cy.login('performance_glitch_user', 'secret_sauce')
    cy.addToCard().should('have.length', 1).url().should('be.equal',cardPage)
  })

  /* --------------------------------------------------------------- */ 

  //add a item to the card & then remove it , card will be empty
  it(' Remove To Cart Scenario', () => {
    cy.login('performance_glitch_user', 'secret_sauce')
    cy.removeFromCard().should('have.length', 0).url().should('be.equal',cardPage)
  })

})