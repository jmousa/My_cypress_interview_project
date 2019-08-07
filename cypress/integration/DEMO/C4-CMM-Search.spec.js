describe('Maintenance Manual Request Search test', function () {

    it('clicks the CMM search links and verifies that user can search for a CMM', function () {
    ///////////////////////////////////////////////////////////////////////////////////////////////
    
    //  connect to the website and verify that you landed on the main page
        cy.visit('http://www.moog.com/markets/aircraft/cmm.html')
        cy.url().should('include', '/cmm.html')

    //  Enter a keyword in the search box
        cy.get('[name=search]').type('465')
        cy.get('.lookup-search-btn').click({force:true})
        cy.contains('Brake Control Valve')
        cy.contains('Add to request').click({force:true})
        cy.contains('Requested Document(s)').click({force:true})
        cy.contains('Document Request')
        cy.contains('< Maintenance Manual Request').click({force:true})
    })
})


describe('Maintenance Manual Request Search test', function () {

    it('clicks the CMM search links and verifies that user can search for a CMM', function () {
    ///////////////////////////////////////////////////////////////////////////////////////////////

    //  connect to the website and verify that you landed on the main page
        cy.visit('http://www.moog.com/markets/aircraft/cmm.html')
        cy.url().should('include', '/cmm.html')

    //  Select a type
        cy.get('.lookup-select').select('AD - Air Directive')
        cy.get('.lookup-search-btn').click({force:true})
        cy.contains('Add to request').click({force:true})
        cy.contains('Requested Document(s)').click({force:true})
        //cy.contains('Document Request')
        //cy.wait(1000)
        cy.contains('< Maintenance Manual Request')
        cy.visit('/')
  })
})
