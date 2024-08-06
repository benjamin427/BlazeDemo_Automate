class BlazeDemo_register {
    register_form(name, company, email_Address, password, confirm_password) {
        cy.contains('Name').should('have.text', 'Name')
        cy.get("[id='name']").type(name).should('have.value', name)
        cy.contains('Company').should('have.text', 'Company')
        cy.get("[id='company']").type(company).should('have.value', company)
        cy.contains('E-Mail Address').should('have.text', 'E-Mail Address')
        cy.get("[id='email']").type(email_Address).should('have.value', email_Address)
        cy.contains('Password').should('have.text', 'Password')
        cy.get("[id='password']").type(password).should('have.value', password)
        cy.contains("Confirm Password").should('have.text', 'Confirm Password')
        cy.get("[id='password-confirm']").type(confirm_password).should('have.value', confirm_password)
    }
}

const register_BlazeDemo = new BlazeDemo_register()
module.exports = register_BlazeDemo;

