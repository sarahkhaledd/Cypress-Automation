const cardPage = 'https://www.saucedemo.com/cart.html'

describe('Swag Labs Adding&removing items to the Cart Test Scenarios', () => {
  //add a item to the card & the card will has a one item
  it('Positive Add To Cart Scenario', () => {
    cy.addToCard().should('have.length', 1).url().should('be.equal',cardPage)
  })
  //add a item to the card & the card still empty , FAIL
  it('Negative Add To Cart Scenario', () => {
    cy.addToCard().should('have.length', 0).url().should('be.equal',cardPage)
  })

  /* --------------------------------------------------------------- */ 

  //add a item to the card & then remove it , card will be empty
  it('Positive Remove To Cart Scenario', () => {
    cy.removeFromCard().should('have.length', 0).url().should('be.equal',cardPage)
  })
  //add a item to the card & then remove it , still has a one item ,FAIL
  it('Negative Remove To Cart Scenario', () => {
    cy.removeFromCard().should('have.length', 1).url().should('be.equal',cardPage)
  })

})