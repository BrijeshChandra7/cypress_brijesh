/// <reference types="cypress" />

describe("Alerts",()=>{

    beforeEach(()=>{
    cy.visit("https://demoqa.com/alerts");
    cy.once('uncaught:exception', () => false);


})


    it("alertFirst",()=>{
     cy.get("#alertButton").click();

     cy.on("window:alert",(data)=>{
        expect(data).to.contains("You clicked a button");
     })
    })


    it("alertAfter5sec",()=>{
        cy.get("#timerAlertButton").click();
   
        cy.on("window:alert",(data)=>{
           expect(data).to.contains("This alert appeared after 5 seconds");
        })
       })


    it("alertWithCancel",()=>{
       
        cy.get("#confirmButton").click();
   
        cy.on("window:confirm",(data)=>{
           expect(data).to.contains("Do you confirm action?");
        })
        cy.on("window:confirm",()=> false);
        cy.get("#confirmResult").should('have.text','You selected Cancel');
       })
       

       it.only("alertEnterableWithCancel",()=>{
        var text="I'm entered inside alert box";
        cy.window().then((win)=>{
           cy.stub(win,'prompt').returns(text);
        })
        cy.get("#promtButton").click();
   
        cy.on("window:confirm",(data)=>{
           expect(data).to.contains("Please enter your name");
        })
        //cy.on("window:confirm",()=> false);
        cy.get("#promptResult").should('have.text','You entered '+text);
       })
       
})