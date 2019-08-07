describe('Approved Raw-Material Suppliers test', function () {

    it('clicks the Approved Raw-Material Suppliers links and verifies that user can search for an ARMS on the website', function () {
    ///////////////////////////////////////////////////////////////////////////////////////////////
    
    //  Connect to the website and verify that you landed on the main page
        cy.visit('/')
        cy.url().should('include', 'moog.com/')
        cy.contains('Accept').click()

    //  Click the suppliers link and verify that you landed on the supply page
        cy.contains('Suppliers').click()
        cy.url().should('include', 'suppliers.html')

    //  Click the approved Raw Material supplier link and veriyf that you landed on the ARMS page
        cy.contains('Approved Raw-Materials Suppliers').click()
        cy.url().should('include', 'arms.html')
        //cy.wait(1000)

    //  Search for Row Material Supplier by keyword
        cy.get('[name=search]').type('Columbia metals LTD').should('have.value','Columbia metals LTD')
        cy.contains('COLUMBIA METALS LTD')
        cy.contains('Add to list').click({force:true})
        cy.get('.clear-cart').click()
        cy.visit('/')
   })
})
