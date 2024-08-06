const {Given, Then} = require('@badeball/cypress-cucumber-preprocessor')
const register_BlazeDemo = require('../page_objects/register')

Given("Navigate to the website", () => {
    cy.BlazeDemo_url_register()
})

Then("Fill out the registration form", (datatable) => {
    datatable.hashes().forEach(element => {
        register_BlazeDemo.register_form(element.Name, element.Company, element.EMail_Address, element.Password, element.Confirm_Password)
    })
})

Then("Click the register button", () => {
    cy.click_register_button()
})
