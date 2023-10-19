/// <reference types="cypress" />

describe("visiting url",()=>{

    it('Visiting urls',()=>{
    
    cy.visit("https://www.facebook.com/");
    cy.wait(2000);
    cy.url().should('eq','https://www.facebook.com/');
    cy.wait(2000);
    cy.visit("https://www.google.co.in/");
    cy.wait(2000);
    cy.url().should('eq','https://www.google.co.in/'); 

})
})