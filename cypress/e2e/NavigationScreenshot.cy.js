/// <reference types="cypress" />

describe("Navigation",()=>{

    it("Navigation",()=>{
       cy.visit("https://www.google.co.in/");
       cy.get("#APjFqb").as('enter').type("Cricket world cup{enter}");
       cy.wait(4000);
       cy.get('div.hdtb-mitem a').eq(1).click();
       cy.wait(2000);
       cy.go('back');
       cy.wait(3000);
       cy.go('forward');
       cy.wait(3000);
       cy.reload();
       cy.screenshot("Images of Cricket WC");
       cy.wait(2000);
       cy.get("a[class='F1hUFe jbTlie'] svg").screenshot("Google logo");

    })
})