/// <reference types="cypress" />

describe('hover', () => {
  it('works with mouseover', () => {
    cy.visit('test-hover.html')
    // at first elements are invisible
    cy.get('#left11').should('not.be.visible')
    cy.get('#menu1').trigger('mouseover')
    // and the elements should be visible
    cy.get('#left11').should('be.visible')
    // hide
    cy.get('#menu1').trigger('mouseout')
    cy.get('#left11').should('not.be.visible')
  })
})
