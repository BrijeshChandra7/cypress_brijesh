/// <reference types="cypress" />
describe('Visit page', () => {
    it('Visiting page', () => {
      //console.log(cy.visit('https://admin-demo.nopcommerce.com/admin/').title());
      cy.visit('https://admin-demo.nopcommerce.com/admin/').title().should('eq','Your store. Login');
    })

    it('visiting another page', ()=> {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })

   it('visiting next another page', ()=> {
        cy.visit('https:facebook.com')  // ? very much time taking to give result, not giving result ?
    }) 
  })