/// <reference types="cypress" />
describe('NewAssertion', ()=> {

    /*it("DragandDrop", ()=>{

        cy.visit('https://demoqa.com/droppable/',{ timeout: 120000 });
        cy.once('uncaught:exception', () => false);

        //cy.get('#draggable').trigger('mousedown', { button: 0 });
        
       // cy.get('#droppable').trigger('mouseup', { force: true });
       cy.get('#draggable').drag('#droppable');

       cy.get('#droppable').contains('Dropped!');
        cy.get('#droppable').should('have.css','background-color').and('eq','steelblue');
        



    })
    */
    it.only('Test Drag and Drop', () => {
        cy.visit('https://demoqa.com/droppable/',{ timeout: 120000 });
        cy.once('uncaught:exception', () => false);
        cy.get('#draggable').drag('#simpleDropContainer > #droppable' , { force: true });
        cy.get('#simpleDropContainer > #droppable').click({force: true});
        cy.get('#simpleDropContainer > #droppable').contains('Dropped!');
        cy.get('#simpleDropContainer > #droppable').should('have.css', 'background-color').and('eq', 'rgb(70, 130, 180)');
    });
})