describe('GitHub Profile Tests', () => {
  it('should validate profile and navigate to popular repository', () => {
    // Visit the GitHub profile
    cy.visit('https://www.github.com/andreminelli')

    // Assert the profile name
    cy.get('[itemprop="name"]').invoke('text').invoke('trim').should('eq', 'Andre Minelli')

    // Find and click the first popular repository (RestEaseSamples)
    cy.get('a[href="/andreminelli/RestEaseSamples"]').first().click()

    // Verify we're on the correct repository page
    cy.url().should('include', '/andreminelli/RestEaseSamples')
    cy.get('strong[itemprop="name"]').invoke('text').invoke('trim').should('eq', 'RestEaseSamples')
  })
})