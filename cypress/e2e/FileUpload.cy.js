/// <reference types="cypress" />

describe("FileUploadwithAssertion",()=>{

  /*  beforeEach(()=>{
        cy.visit("https://admin:admin@the-internet.herokuapp.com/upload");
        cy.once('uncaught:exception', () => false);

    })  */

    it("SingleFileUpload",()=>{
        cy.visit("https://admin:admin@the-internet.herokuapp.com/upload");
        cy.once('uncaught:exception', () => false);
        var fileName='Test.pdf';
        cy.get('#file-upload').attachFile(fileName);
        cy.get("#file-submit").click();
        cy.get('div.example h3').should('have.text','File Uploaded!');
        cy.get('#uploaded-files').should('include.text',fileName)
        })

    it("SingleFileRename",()=>{
        cy.visit("https://admin:admin@the-internet.herokuapp.com/upload");
        cy.once('uncaught:exception', () => false);
            var filepls = 'MyTest.pdf';
            cy.get('#file-upload').attachFile({filePath: 'Test.pdf', fileName: filepls});
            cy.get("#file-submit").click();
            cy.get('div.example h3').should('have.text','File Uploaded!');
            cy.get('#uploaded-files').should('include.text',filepls)
            })

    it("File Upload Drag and Drop",()=>{
        cy.visit("https://admin:admin@the-internet.herokuapp.com/upload");
        cy.once('uncaught:exception', () => false);
                var filepls = 'Test1.pdf';
                cy.get('div.dz-clickable').attachFile(filepls, {subjectType: "drag-n-drop"});
                cy.get('div.dz-filename span').eq(0).contains(filepls);
                })


    it("File upload shadow element",()=>{
        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm");
        cy.get("input.smart-browse-input",{includeShadowDom:true}).attachFile('Test.pdf');
        cy.get("span.smart-item-name",{includeShadowDom:true}).contains("Test.pdf");
    })

    it.only("Multiple File upload",()=>{
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");
        cy.get("#filesToUpload").attachFile(['Test.pdf','Test1.pdf']);
        cy.get("ul#fileList").contains("Test.pdf");
        cy.get("ul#fileList li").eq(1).contains("Test1.pdf");
    })
})