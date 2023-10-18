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

/*.only('Tab',()=>{
cy.get('#opentab').then(function(el){
    cy.once('uncaught:exception', () => false);
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
}) */

it('Tab', () => {
    cy.get('#opentab').then(function (el) {
      cy.once('uncaught:exception', () => false);
      const url1 = el.prop('href');
      cy.log(url1);
  
      // Open a new tab using window.open()
      cy.window().then(win => {
        win.open(url1, '_blank');
       
      });
      cy.url().should('eq','https://www.qaclickacademy.com/');
      // You can add additional assertions or commands here if needed
    });
  });
  

it('New Window',()=>{

    cy.get('#openwindow').click();
})


it('IFrame',()=>{

   const getiframe=cy.get('#courses-iframe').its('0.contentDocument.body').should('be.visible').then(cy.wrap);

   getiframe.find('a[href="https://www.youtube.com/channel/UCgx5SDcUQWCQ_1CNneQzCRw"]').click();
   
   getiframe.find('a[href="https://courses.rahulshettyacademy.com/sign_up"]').eq(0).click();
})  

it('Custom handle',()=>{
  cy.clickOnButton('HOME');
  cy.wait(2000);
  cy.go('back');
  cy.clickOnLink('Free Access to InterviewQues/ResumeAssistance/Material');
})



/*it.only('should assert blinking text', () => {
  // Get the element that contains the blinking text
  cy.get('.blinkingText').then($element => {
    const initialColor = $element.css('color');

    // Wait for a while to allow the blinking effect to happen
    cy.wait(260);

    // Assert that the color has changed (indicating a "blink")
    cy.get('.blinkingText').should('have.css', 'color').then(color => {
      expect(color).not.to.equal(initialColor);
    });
  });
}); */

it('should assert blinking background color', () => {
  // Get the element that contains the blinking background
  cy.get('.blinkingText').then($element => {
    const initialBackgroundColor = $element.css('background-color');

    // Wait for a while to allow the blinking effect to happen
    cy.wait(1300);

    // Assert that the background color has changed (indicating a "blink")
    cy.get('.blinkingText').should('have.css', 'background-color').then(backgroundColor => {
      expect(backgroundColor).not.to.equal(initialBackgroundColor);
    });
  });
});

it.only('Fixture',()=>{
  cy.fixture('MyData').then( (data)=>{
    cy.get('#autocomplete').type(data.text);
  })
 

})

})


