/// <reference types="Cypress" />

describe('Responsiveness', () => {
    // TODO random viewport sizes from a given range
    // TODO install cypress-react-plugin

    context('down md: small devices', () => {
        beforeEach(() => {
            cy.viewport(960 - 1, 300);
        });

        describe('Initial state when user visits home', () => {
            beforeEach(() => {
                cy.visit('/');
            });

            it('should have main grid with column layout', () => {
                cy.get('#mainGrid').should('have.css', 'flex-direction', 'column');
            });
        });
    });
    context('up md: medium sized devices', () => {
        beforeEach(() => {
            cy.viewport(1280 - 1, 400);
        });

        describe('Initial state when user visits home', () => {
            beforeEach(() => {
                cy.visit('/');
            });

            it('should have main grid with column layout', () => {
                cy.get('#mainGrid').should('have.css', 'flex-direction', 'column');
            });
        });
    });
    context('up lg: Desktop & Landscape orientation', () => {
        beforeEach(() => {
            cy.viewport(1280, 720);
        });

        describe('Initial state when user visits home', () => {
            beforeEach(() => {
                cy.visit('/');
            });

            it('should have main grid with row layout', () => {
                cy.get('#mainGrid').should('have.css', 'flex-direction', 'row');
            });
        });
    });
});
