describe('Primary header test', function () {

    it('check the main page and verify that it is functioning properlty', function () {
    ///////////////////////////////////////////////////////////////////////////////////////////////
    //  connect to the website and verify that you landed on the main page
        cy.visit('/')
        cy.url().should('include', 'moog.com')

    //  dismiss the cookie from the bottom of the screen
        cy.contains('Accept').click()

    //  Verify that the search functionaity at the top right is functioning correctly
        cy.get('.Search-link').click()
        cy.get('.Search_Input-input').type('actuator')
        cy.get('.Search_Input-button').click()
        cy.wait(1000)
        cy.contains('Showing results 1')
        cy.go('back')

    //  Verify that the search functionaity is functioning correctly
        cy.get('.search-input').type('aircraft')
        cy.get('.search-submit').click()
        cy.contains('Showing results 1')
        cy.go('back')
        cy.get('.search-input').clear()

    //  verify that the text on the main page displays correctly
        cy.contains('INNOVATING')
        cy.contains('Search')
        cy.contains('About Moog')
        cy.contains('How Can We Help You?')
        cy.contains('Contact Moog via our AOG hotline, web form or by phone.')
        cy.contains('AOG Hotline')
        cy.contains('Call Moog')
        cy.contains('Web Form')
        cy.contains('Worldwide Contacts')

    //  Verify the information at the footer
        cy.get('footer').scrollIntoView({ duration: 1000 })
        //cy.get('.Footer-list').scrollIntoView({ duration: 1000 })
        cy.contains('About Moog')
        cy.contains('Industries')
        cy.contains('Products')
        cy.contains('News & Events')
        cy.contains('Investors')
        cy.contains('Contact Us')
        cy.contains('Careers')
    })
})
