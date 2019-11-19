describe("Verifying Valid Scenarios", ()=>{
    it("Open the application URL", ()=>{
        cy.visit('/')

    });

    it("Input a valid value into the text input box and submit", ()=>{

        cy.fixture('sample_data').then(dataJson =>{
             // @ts-ignore
            dataJson.forEach((item) =>{
                cy.get('input[type="number"]').type(item.Value);
                cy.get('button').click();
                cy.get('h2').should('contain', item.Median)

            });
        });
    });

});

describe("Validating Non-numeric Inputs", ()=>{
    it("Open the application URL", ()=>{
        cy.visit('/')

    });

    it("Enter a Non-numeric character in the text box", ()=>{
        cy.get('input[type="number"]').type('..--');

    });

    it("Click the submit button", ()=>{
        cy.get('button').click();

    });

    it("Verify validation message is displayed", ()=>{
        cy.get('[type="number"]').then(($input) => {
            // @ts-ignore
            expect($input[0].validationMessage).to.eq('Please enter a number.')
        })

    });

});

describe("Validating Large Numeric Value", ()=>{
    it("Opens the application URL", ()=>{
        cy.visit('/');

    });

    it("Enter a Large numeric character in the text box", ()=>{
        cy.get('input[type="number"]').type('1000000000');

    });

    it("Click the submit button and verify alert message is displayed", ()=>{
        const stub = cy.stub();
        cy.on('window:alert', stub);
        cy.get('button').click().then(() => {
                expect(stub.getCall(0)).to.be.calledWith('Number exceeds limit')
            })

    });
});