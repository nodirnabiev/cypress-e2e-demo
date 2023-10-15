import { baseUrl } from '../cypress.env.json'
import 'cypress-iframe';

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('visitHomePage', () => {
    cy.visit(baseUrl);
});

Cypress.Commands.add('visitLoginPage', () => {
    cy.visit(baseUrl);

    cy.get('div[id="account-detail"] a[href="/account"]').click({ force: true });
});

Cypress.Commands.add('clearBrowserStorage', () => {
    cy.clearSessionStorage();
    cy.clearLocalStorage();
});

Cypress.Commands.add('clearSessionStorage', () => {
    cy.window({ log: false }).then((window) => {
        cy.log('Clearing session storage');
        window.sessionStorage.clear();
    });
});

Cypress.Commands.add('shouldHaveBrowserTitle', (title) => {
    cy.title().should('equal', `${title}`);
});

Cypress.Commands.add('validateLowerHomeHeaderLinks', ($element) => {
    const lowerHeaderMenuLinks = [
        {
            text: "News",
            href: 'https://developer.marvel.com/articles'
        },
        {
            text: "Comics",
            href: 'https://developer.marvel.com/comics'
        },
        {
            text: "Characters",
            href: 'https://developer.marvel.com/characters'
        },
        {
            text: "Movies",
            href: 'https://developer.marvel.com/movies'
        },
        {
            text: "TV Shows",
            href: 'https://developer.marvel.com/tv-shows'
        },
        {
            text: "Games",
            href: 'https://developer.marvel.com/games'
        },
        {
            text: "Videos",
            href: 'https://developer.marvel.com/watch'
        },
        {
            text: "More",
            href: '#'
        }

    ]

    cy.get($element).should('have.length', 8).each(($el, index) => {
        cy.get($el).find(`a[id="mvl-flyout-button-${index}"]`)
        .should('have.attr', 'href', lowerHeaderMenuLinks[index]['href'])
        .and('have.text', lowerHeaderMenuLinks[index]['text']);
    });
});

Cypress.Commands.add('validateEmailField', (input) => {
    //With native cypress
    cy.get('iframe[id="oneid-iframe"').its('0.contentDocument').its('body').should('not.be.undefined')
    .find('#InputIdentityFlowValue').type(input).click();

    //With iframe
    // cy.enter('#oneid-iframe').then(getBody => {
    //     getBody().find('#InputIdentityFlowValue').should('be.visible').type(input).click({ force: true });
    // })
    // cy.iframe('#oneid-iframe').find('#InputIdentityFlowValue').focus().type(input).click({ force: true });
    
});

