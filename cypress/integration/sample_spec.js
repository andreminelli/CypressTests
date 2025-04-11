describe('Sample Test Suite', () => {
    it('should visit the homepage', () => {
        cy.visit('http://localhost:3000'); // Replace with your application's URL
        cy.contains('Welcome'); // Replace with an element that should be on the homepage
    });

    it('should load sample data from fixtures', () => {
        cy.fixture('example').then((data) => {
            expect(data).to.have.property('key'); // Replace 'key' with an actual key from your JSON
        });
    });

    it('should perform a sample action', () => {
        cy.get('button').click(); // Replace with the actual selector
        cy.url().should('include', '/next-page'); // Replace with the expected URL after the action
    });
});