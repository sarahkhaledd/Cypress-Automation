const loginPage ='https://www.saucedemo.com/'
var homePage = 'https://www.saucedemo.com/inventory.html'
export {homePage}
//function to check login fields
describe('Swag Labs Login Test Scenarios', () => {
  //Correct username & correct Password
 it('Positive Login Scenario', () => {
    cy.login('performance_glitch_user','secret_sauce').url().should('be.equal', homePage)
  })
  //Correct username & incorrect Password
  it('Negative Login Scenario', () => {
    cy.login('performance_glitch_user', '1234')
  })
  //inCorrect username & correct Password
  it('Negative Login Scenario', () => {
    cy.login('user', 'secret_sauce')
  })
  //Not existing user
  it('Negative Login Scenario', () => {
    cy.login('sarahkh', '@66SS')
  })
  //Empty fields
  it('Negative Login Scenario', () => {
    cy.login('\n', '\n')
  })

})