/* global describe, it, cy, should */

describe('PetGallery', function() {
  it('Site Works', function() {
    cy.visit('/')
  })
  it('go to category and see pictures', function() {
    cy.visit('/pet/1')
    cy.get('article')
  })
  it('go using navbar to the home', function () {
    cy.visit('/pet/1')
    cy.get('nav a').first().click()
    cy.url().should('include','/')
  })
  it('No registered users can see login form', function () {
    cy.visit('/favs')
    cy.get('/form').should('have.lenght', 2)
  })
})