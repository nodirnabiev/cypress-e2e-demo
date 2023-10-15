describe('Login - Page', () => {
    before(() => {
        cy.visitLoginPage();
    });

    it('should be on login page', () => {
        cy.location('pathname').should('include', '/signin');
    });

    it('should display email title', () => {
        cy.iframe('#oneid-iframe').find('#Title').contains('span', 'Enter your email');
    });

    it('should display email title and text', () => {
        cy.iframe('#oneid-iframe').find('#Title').contains('span', 'Enter your email');
        cy.iframe('#oneid-iframe').contains('p', "Log into your Marvel account. If you don't have one, you will be prompted to create one.");
    });

    it('validate email input field', () => {
        cy.validateEmailField('cypress@gmail.com');
    });

    it('should display text', () => {
        cy.contains('h3', 'Marvel is part of The Walt Disney Family of Companies.');
    });
});
