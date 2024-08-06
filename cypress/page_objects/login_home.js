class BlazeDemo_Login {
    login_form(email_Address, password){
        cy.contains('E-Mail Address').should('have.text', 'E-Mail Address')
        cy.get('#email').type(email_Address).should('have.value', email_Address)
        cy.contains('Password').should('have.text', 'Password')
        cy.get('#password').type(password).should('have.value', password)
    }
}

const login_form_BlazeDemo = new BlazeDemo_Login()
module.exports = login_form_BlazeDemo;
 