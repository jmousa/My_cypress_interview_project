describe('Supplemental Supplier Quality Requirements test', function () {

    it('clicks the SSQR search links and verifies that the user can search for a SSQR', function () {
    /////////////////////////////////////////////////////////////////////////////////////////////////

    //  connect to the website and verify that you landed on the main page
        cy.visit('/')
        cy.url().should('include', 'moog.com/')
        cy.contains('Accept').click()

    //  Click the suppliers link and verify that you landed on the supply page
        cy.contains('Suppliers').click()
        cy.url().should('include', 'suppliers.html')


    //  click the Supplemental supplier quality requirewments and verify that the page displayed
        cy.contains('Supplemental Supplier Quality Requirements').click()
        cy.url().should('include', 'suppliers/ssqr.html')

    //  Enter a tille or SSQR # to search for
        cy.get('.js-typeahead-ssqrNo_v1').type('P002{enter}')
        cy.contains('Hazardous Materials Management')
        cy.get('.add-cart').click()
        cy.get('.clear-cart').click()
        cy.visit('/')

    })
})