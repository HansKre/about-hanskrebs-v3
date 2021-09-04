/// <reference types="Cypress" />

describe('Static UI', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should render correctly', () => {
        cy.get('#title').should('have.text', 'Get insights that help your business grow.');
    });
});
