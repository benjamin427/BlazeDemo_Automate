const {Given, Then} = require('@badeball/cypress-cucumber-preprocessor')
const  password_reset_BlazeDemo = require('../page_objects/forgotPassword')

Given("Navigate to the website", () => {
    cy.BlazeDemo_url_password_reset()
})

Then("Enter email address", (datatable) => {
    datatable.hashes().forEach(element => {
        password_reset_BlazeDemo.enter_email_addreess(element.email_address)
    })
})

Then("click the button to send password reset link", () => {
    cy.BlazeDemo_url_password_reset()
})
