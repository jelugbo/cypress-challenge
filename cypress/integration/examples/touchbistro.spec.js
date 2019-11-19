"use strict";
describe("Verifying Valid Scenarios", function () {
    it("Opens the application URL", function () {
        cy.visit('http://localhost:3000');
    });
    it("Input a valid value into the text input box and submit", function () {
        cy.fixture('sample_data').then(function (dataJson) {
            // @ts-ignore
            dataJson.forEach(function (item) {
                cy.get('input[type="number"]').type(item.Value);
                cy.get('button').click();
                cy.get('h2').should('contain', item.Median);
            });
        });
    });
});
describe("Validating Non-numeric Inputs", function () {
    it("Opens the application URL", function () {
        cy.visit('http://localhost:3000');
    });
    it("Enters a Non-numeric character in the text box", function () {
        cy.get('input[type="number"]').type('..--');
    });
    it("Click the submit button", function () {
        cy.get('button').click();
    });
    it("Verifies validation message is displayed", function () {
        cy.get('[type="number"]').then(function ($input) {
            // @ts-ignore
            expect($input[0].validationMessage).to.eq('Please enter a number.');
        });
    });
});
describe("Validating Large Numeric Value", function () {
    it("Opens the application URL", function () {
        cy.visit('http://localhost:3000');
    });
    it("Enters a Large numeric character in the text box", function () {
        cy.get('input[type="number"]').type('1000000000');
    });
    it("Click the submit button and verify alert message is displayed", function () {
        var stub = cy.stub();
        cy.on('window:alert', stub);
        cy.get('button').click().then(function () {
            expect(stub.getCall(0)).to.be.calledWith('Number exceeds limit');
        });
    });
});
