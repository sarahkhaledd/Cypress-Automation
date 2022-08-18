import { login } from "./login.cy";
let type = "add"
//const homePage = 'https://www.saucedemo.com/inventory.html'
const cardPage = 'https://www.saucedemo.com/cart.html'

export function addAndRemoveToCard(count) {
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
  cy.get('.shopping_cart_link').click()
  if(type == "remove")
    {
      cy.get('[data-test="remove-sauce-labs-backpack"]').click()
      count--
    } 
    cy.get('.cart_item').should('have.length', count)
    cy.url().should('be.equal', cardPage)
}

describe('Swag Labs Adding&removing items to the Cart Test Scenarios', () => {
  //add a item to the card & the card will has a one item
  it('Positive Add To Cart Scenario', () => {
    login('performance_glitch_user', 'secret_sauce')
    addAndRemoveToCard(1)
  })
  //add a item to the card & the card still empty
  it('Negative Add To Cart Scenario', () => {
    login('performance_glitch_user', 'secret_sauce')
    
    addAndRemoveToCard(0)
  })

  /* --------------------------------------------------------------- */ 

  //add a item to the card & then remove it , card will be empty
  it('Positive Remove To Cart Scenario', () => {
    login('performance_glitch_user', 'secret_sauce')
    type ='remove'
   
    addAndRemoveToCard(1)
  })
  //add a item to the card & then remove it , still has a one item
  it('Negative Remove To Cart Scenario', () => {
    login('performance_glitch_user', 'secret_sauce')
    type ='remove'
  
    addAndRemoveToCard(1)
  })

})