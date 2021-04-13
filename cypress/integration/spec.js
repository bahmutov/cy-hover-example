/// <reference types="cypress" />
import "cypress-real-events/support";
it('hovers', () => {
  cy.visit('test-hover.html')
  cy.get('#left11').should('not.be.visible')
  cy.get('#menu1').trigger('mouseover')
  cy.get('#left11').should('be.visible')
    .wait(1000)
  cy.get('#menu1').trigger('mouseout')
  cy.get('#left11').should('not.be.visible')
})

it.only(':hovers', () => {
  cy.visit('test-hover.html')
  cy.get('#left21').should('not.be.visible')
  cy.get('#menu2').realHover()
  cy.get('#left21').should('be.visible')
    .wait(1000)
  cy.get('h1').realHover()
  cy.get('#left21').should('not.be.visible')
})
