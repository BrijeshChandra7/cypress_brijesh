/// <reference types="cypress" />

describe("AlertsNew",()=>{

    it('AlertsAuthenticationFirst',()=>{
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth");
    })

    it.only('AlertsAuthenticationSecond',()=>{
        cy.visit("https://the-internet.herokuapp.com/basic_auth",{auth: {username:"admin", password:"admin"}});
    })

})
