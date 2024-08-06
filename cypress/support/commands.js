// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add("BlazeDemo_url_login", () => {
    cy.visit("https://blazedemo.com/login")
    cy.get('a').invoke("attr", "href").then(href => {
        cy.request(href).its('status').should('eq', 200)
    })
})

Cypress.Commands.add("BlazeDemo_url_register", () => {
    cy.visit("https://blazedemo.com/register")
    cy.get('a').invoke("attr", "href").then(href => {
        cy.request(href).its('status').should('eq', 200)
    })
})

Cypress.Commands.add("BlazeDemo_url_password_reset", () => {
    cy.visit("https://blazedemo.com/password/reset")
    cy.get('a').invoke("attr", "href").then(href => {
        cy.request(href).its("status").should('eq', 200)
    })
})

Cypress.Commands.add("click_login_button", () => {
    cy.contains('Login').should('have.text', 'Login');
    cy.get('[type="submit"]').click()
})

Cypress.Commands.add("click_forgot_password", () => {
    cy.contains('Forgot Your Password?').should('have.text', 'Forgot Your Password')
    cy.get('[class="btn btn-link"]').click()
})

Cypress.Commands.add("click_register_button", () => {
    cy.get('[type="submit"]').click()
})

Cypress.Commands.add("send_password_reset_link", () => {
    cy.contains("Send Password Reset Link").should('have.text', 'Send Password Reset Link')
    cy.get('[type="submit"]').click()
})

Cypress.Commands.add("click_remember_me_checkbox", () => {
    cy.get('[type="checkbox"]').click()
})

Cypress.Commands.add("click_register_dashboard", () => {
    cy.contains('Register').should('have.text', 'Register')
    cy.contains('Register').click()
})

Cypress.Commands.add("click_login_dashboard", () => {
    cy.contains('Login').should('have.text', 'Login')
    cy.contains('Login').click()
})

Cypress.Commands.add("click_blazedemo_dashboard", () => {
    cy.contains('BlazeDemo').should('have.text', 'BlazeDemo')
    cy.contains('BlazeDemo').click()
})

