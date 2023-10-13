/// <reference types="cypress" />
describe("CSS Locators", ()=> {
   /* it("Css locator sign in", ()=>{
        cy.visit("https://admin-demo.nopcommerce.com/admin/");
        cy.get("input[value='admin@yourstore.com']").clear().type("admin@yourstore.com");
        cy.get("input.password").clear().type("admin");
        cy.get("button.login-button").click();


    })
    it("CSS Locator on rahul shetty page",()=>{
        cy.vis(it("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('#autocomplete').type('I reached here');
        cy.get('input[placeholder^="Type to"]').type(' I used starts with');
        cy.get('input[placeholder$="ies"]').type(' I used ends with');
        cy.get('input[placeholder*="elec"]').type(' I used contains with');
    })
    it("Children", ()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        //cy.get('div#checkbox-example fieldset').children('label[for="bmw"]').get('#checkBoxOption1').click();
        var a=cy.get('div#checkbox-example fieldset').children();
        cy.log("This is output ",a);
       
    })  
    */

    it("Children", ()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('label[for="bmw"]').next().children().click();
        cy.get('label[for="radio1"]').next().children().click();
        cy.log("The current url is ",cy.url());
       
    })  

    it("Assertion", ()=>{
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    console.log(cy.title());
    cy.url().should('include','shetty');
    console.log(cy.url())
    cy.url().should('eq','https://rahulshettyacademy.com/AutomationPractice/');
    cy.url().should('contain','rahul');
    cy.get('img.logoClass').should('be.visible');
    cy.get('img.logoClass').should('exist');

})
})