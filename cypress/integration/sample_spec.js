describe('My First Test', function() {
  it('Does do much!', function() {
    expect(true).to.equal(true)
  })

  it('Visits the Kitchen Sink', function() {
    cy.visit('https://example.cypress.io')

    cy.contains('type').click()

    // Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', '/commands/actions')

    // Get an input, type into it and verify that the value has been updated
    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')
  })

  it('Visits Google page', function() {
    cy.visit('https://google.com')

    cy.get('input').type('test').click()
  })
})
