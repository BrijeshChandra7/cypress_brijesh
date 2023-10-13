/// <reference types="cypress" />
describe('Assertion', ()=> {

    beforeEach(() => {
        // This code will run before each test case in this describe block
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/'); 
      });
 
    it("Assertion", ()=>{

        

        console.log(cy.title());

        cy.url().should('include','shetty');

        console.log(cy.url())

        cy.url().should('eq','https://rahulshettyacademy.com/AutomationPractice/');

        cy.url().should('contain','rahul');

        cy.get('img.logoClass').should('be.visible');

        cy.get('img.logoClass').should('exist');

        // retry until we find 3 matching <li.selected>
        cy.get('#checkbox-example fieldset').find('label').should('have.length', 3);

        cy.get('#checkBoxOption1').should('have.value','option1');

        cy.get('#checkbox-example fieldset legend').should('have.text','Checkbox Example');

        cy.get('#checkBoxOption3').check();

        cy.get('#checkBoxOption3').should('be.checked');

        cy.get('#checkBoxOption3').should('have.attr','type');

        cy.get('input[name="radioButton"]').should('have.class','radioButton');

        cy.get('#checkBoxOption1').should('be.enabled').check();

        cy.get('#checkBoxOption2').should('be.empty').check();

        cy.get('input.radioButton').eq(2).click();

        cy.get('div.left-align fieldset legend').eq(1).should('have.text','Switch Window Example');

        cy.get('input[name="radioButton"]').eq(1).click().should('be.checked').and('have.value','radio2');



})

it('Dropdown',()=>{

   

    cy.get("#dropdown-class-example").select(1);
    cy.get('Select option').should('be.selected');


})

it('Random',()=>{
   
    cy.get('#autocomplete').type('I reached here');
    cy.scrollTo(0, 500);
    cy.scrollTo(0,-500);
    cy.get('fieldset .totalAmount').scrollIntoView();

})
it('Mouse',()=>{
    //cy.get('#mousehover').scrollIntoView();
    cy.get('#mousehover').trigger('mouseover');
   
})

})