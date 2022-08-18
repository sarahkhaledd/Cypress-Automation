const loginPage ='https://www.saucedemo.com/'
var url = 'https://www.saucedemo.com/inventory.html'
 
//function to check login fields
export function login(username, password) {
  cy.visit('https://www.saucedemo.com')
    cy.get('[data-test="username"]').type(username)
    cy.get('[data-test="password"]').type(password)
    cy.get('[data-test="login-button"]').click()
    cy.url().should('be.equal', url)
}    

describe('Swag Labs Login Test Scenarios', () => {
  //Correct username & correct Password
  it('Positive Login Scenario', () => {
    
    login('performance_glitch_user', 'secret_sauce')
  })
  //Correct username & incorrect Password
  it('Negative Login Scenario', () => {
    url = loginPage
    login('performance_glitch_user', '1234')
  })
  //inCorrect username & correct Password
  it('Negative Login Scenario', () => {
    url = loginPage
    login('user', 'secret_sauce')
  })
  //Not existing user
  it('Negative Login Scenario', () => {
    url = loginPage
    login('sarahkh', '@66SS')
  })
  //Empty fields
  it('Negative Login Scenario', () => {
    url = loginPage
    login(' ', ' ')
  })

})