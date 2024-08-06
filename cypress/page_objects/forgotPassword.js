class BlazeDemo_ResetPassword {
    enter_email_addreess(email_Address) {
        cy.contains("E-Mail Address").should('have.text', 'E-Mail Address')
        cy.get('[id="email"]').type(email_Address).should('have.value', email_Address)
    }
}

const password_reset_BlazeDemo = new BlazeDemo_ResetPassword()
module.exports = password_reset_BlazeDemo;
