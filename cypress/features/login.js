const {Given, Then} = require('@badeball/cypress-cucumber-preprocessor')
const login_form_BlazeDemo = require('../page_objects/login_home')


Given("Navigate to the website", () => {
    cy.BlazeDemo_url_login()
})
Then("Enter login credentials", (datatable) => {
    datatable.hashes().forEach(element => {
        login_form_BlazeDemo.login_form(element.email_address, element.password)
    })
})
Then("Click the login button", () => {
    cy.click_login_button()
})


Given("Navigate to the website again", () => {
    cy.BlazeDemo_url_login()
})
Then("Enter login credentials once more", (datatable) => {
    datatable.hashes().forEach(element => {
        login_form_BlazeDemo.login_form(element.email_address, element.password)
    })
})
Then("Click the checkbox", () => {
    cy.click_remember_me_checkbox()
})
Then("Click the login button for the second time", () => {
    cy.click_login_button()
})
