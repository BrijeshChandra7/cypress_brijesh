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

    cy.wait(2000);

    cy.get("#dropdown-class-example").select('Option2');
    cy.get('Select option').should('be.selected');

    cy.wait(2000);

    cy.get("#dropdown-class-example").select('option3');
    cy.get('Select option').should('be.selected');



})

it.only('Random',()=>{
   
    cy.get('#autocomplete').type('I reached here');

    cy.scrollTo(0, 500);

    cy.scrollTo(0,-500);

    cy.get('fieldset .totalAmount').scrollIntoView();

    cy.scrollTo('bottom');


})  

/* it('Mouse',()=>{
    cy.visit('https://the-internet.herokuapp.com/hovers');
    cy.get('img[src="/img/avatar-blank.jpg"]').eq(0).trigger('mouseover');
    cy.get('h5').eq(0).should('contain','name: user1');
   
}) */


it('Table',()=>{
    
    cy.get('table[name="courses"] tbody tr').eq(0).get('td').eq(0).scrollIntoView().should('have.text','Rahul Shetty');

    cy.get('table[name="courses"] tbody tr').eq(0).get('td').eq(1).should('have.text','Selenium Webdriver with Java Basics + Advanced + Interview Guide');

    cy.get('table[name="courses"] tbody tr').eq(0).get('td').eq(2).should('have.text','30');
})

it('Tab',()=>{
cy.get('#opentab').then(function(el){

    var url1=el.prop('href');
    cy.log(url1);
    cy.visit(url1);
    cy.origin(url1,()=>{
   cy.visit(url1);
   //var url=cy.url();
    //cy.log(url);
    //.title().should('eq','QAClick Academy - A Testing Academy to Learn, Earn and Shine');
 })
    

   })
    //cy.get('#opentab').click();
    //cy.window();
  //  cy.url().should('eq','https://www.qaclickacademy.com/');
   // cy.title().should('eq','QAClick Academy - A Testing Academy to Learn, Earn and Shine');
})

it('New Window',()=>{

    cy.get('#openwindow').click();
})


it('IFrame',()=>{

    const getiframe=cy.get('#courses-iframe').its('0.contentDocument.body').should('be.visible').then(cy.wrap);

   getiframe.find('a[href="https://www.youtube.com/channel/UCgx5SDcUQWCQ_1CNneQzCRw"]').click();
   
   getiframe.find('a[href="https://courses.rahulshettyacademy.com/sign_up"]').eq(0).click();
})  

})