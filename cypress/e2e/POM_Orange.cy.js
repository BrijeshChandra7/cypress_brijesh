/// <reference types="cypress" />
import Login from "../PageObjects/LoginOrange.js";

describe('POM_Test',()=>{

    it('POMOrangeHRM Login',()=>{
        let Orange = new Login();

    cy.fixture('OrangeHRMLogin.json').then((data)=>{
        cy.visit(data.url);
        Orange.setUserName(data.UserName);
        Orange.setPassword(data.Password);
        Orange.clickLogin();
    })

})
})