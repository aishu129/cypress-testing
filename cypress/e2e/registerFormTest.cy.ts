describe('opening registerForm', () => {
  it('open registration form', () => {
    //test definition
    cy.visit('https://aishu129.github.io/employee-register-form/')
  })
  
})

describe('Testing entering values in text fields', ()=> {
  it('Entering value in First Name field', ()=> {
    cy.get('#first-name').type('Aishwarya')
  })
  it('Entering value in Last Name field', ()=> {
    cy.get('#last-name').type('Sriram')
  })
  it('Entering value in Password field', ()=> {
    cy.get('#password').type('somepassword')
  })
  it('Entering value in Confirm Password field', ()=> {
    cy.get('#confirm-password').type('somepassword')
  })
  it('Entering value in Date of Birth field', ()=> {
    cy.get('#birthday').type('2001-09-12')
  })
  it('Entering value in Email field', ()=> {
    cy.get('#email').type('abcd@gmail.com')
  })
  it('Entering value in Phone field', ()=> {
    cy.get('#phone').type('1234567890')
  })

})


describe('Testing selecting values in dropdown field', ()=> {
  it('Selecting value in Gender field', ()=> {
    cy.get('#gender').select('Male')
  })
})

describe('Testing clicking checkbox in checkbox field', ()=> {
  it('Clicking checkbox in Terms and Conditions field', ()=> {
    cy.get('#terms').check()
  })
})

describe('Testing entering wrong values in fields', ()=> {
  it('Entering all wrong values', ()=> {
    cy.get('#first-name').type('Aishwarya')
    cy.get('#last-name').type('Sriram')
    cy.get('#password').type('somepassword')
    cy.get('#confirm-password').type('somepasswor')
    cy.get('#birthday').type('2022-09-12')
    cy.get('#email').type('abcdgmail.com')
    cy.get('#phone').type('123456789')
    cy.get('#submit').click()
    cy.get('.error').should("have.css","display","block")

  })
  
})

describe('Testing clickability of Reset button', ()=> {
  it('Reset button click', ()=> {
    cy.get('#reset').click()
  })
})


describe("Resetting Form",()=>{
  it("Functionality of Reset",()=>{
    cy.get("#reset").click()
    cy.get("#first-name").should("have.value","")
    cy.get("#last-name").should("have.value","")
    cy.get("#password").should("have.value","")
    cy.get("#confirm-password").should("have.value","")
    cy.get("#gender").should("have.value","female")
    cy.get("#birthday").should("have.value","")
    cy.get("#email").should("have.value","")
    cy.get("#phone").should("have.value","")
  })
})

describe('Testing clickability of Submit button', ()=> {
  it('Submit button click', ()=> {
    cy.get('#submit').click()
  })
})