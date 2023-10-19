/// <reference types="cypress" />

describe("Form",()=>{
    beforeEach(()=>{

        cy.visit("https://demoqa.com/automation-practice-form",{ timeout: 100000 });

        cy.once('uncaught:exception', () => false);

    })

    it("Form1",()=>{
    cy.fixture('FormData').then((data)=>{
        cy.get('#firstName').type(data.FirstName);

        cy.get('#lastName').type(data.LastName);

        cy.get('#userEmail').type(data.Email);

        cy.get("label.custom-control-label").contains(data.Gender).click();

        cy.get('#userNumber').type(data.Mobile);

        let Dob=data.DOB;

        var Dobarraysplit=Dob.split(" ");

        cy.get('#dateOfBirthInput').click();
        cy.wait(1000);

        cy.get('select.react-datepicker__month-select').select(Dobarraysplit[1]);

        cy.get('select.react-datepicker__year-select').select(Dobarraysplit[2]);

        cy.get('div.react-datepicker__day ').contains(Dobarraysplit[0]).click();

        cy.wait(2000);

        cy.get('div.subjects-auto-complete__value-container').type(data.Subjects);

        cy.get("label.custom-control-label").contains(data.Hobby1).click();

        cy.get("label.custom-control-label").contains(data.Hobby2).click();

        cy.get("#uploadPicture").attachFile('Test.pdf');

        cy.get("#currentAddress").type(data.CurrAddr);
        
    })
    })
})