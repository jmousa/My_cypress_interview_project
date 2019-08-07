describe('Approved Special-Process Suppliers test', function () {

    it('clicks the Approved Special-Process Suppliers link and verifies and verifies that user can search for an ASPS on the website', function () {
    ///////////////////////////////////////////////////////////////////////////////////////////////
    //  Connect to the website and verify that you landed on the main page
        cy.visit('/')
        cy.url().should('include', 'moog.com/')
        cy.contains('Accept').click()

    //  Click the suppliers link and verify that you landed on the supply page
        cy.contains('Suppliers').click()
        cy.url().should('include', 'suppliers.html')

    //  click the Approved Special-Process Suppliers and verify that you landed on the ASPS page
        cy.contains('Approved Special-Process Suppliers').click({force: true})
        cy.url().should('include', 'suppliers/asps.html')

    //  Search for an ASPS by specification
        cy.get('.js-typeahead-asps_v1').type('SAE-AMS-H-6088')
        cy.get('.typeahead__display').click()
        cy.contains('BRADDOCK METALLURGICAL INC.')
        cy.get('.clear-cart').click()

    //  Searches for ASPS by supplier name
        cy.get('.js-typeahead-asps_v2').type('acp')
        cy.contains('ACP METAL FINISHING').click()
        cy.contains('ACP METAL FINISHING')
        cy.contains('Clear').click({force: true})
        //cy.wait(1000)
        cy.visit('/')

  })
})
