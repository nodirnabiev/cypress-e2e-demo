describe('Home - Page', () => {
    before(() => {
        cy.visitHomePage();
    });

    it('should be on home page', () => {
        cy.location('pathname').should('equal', '/');
    });

    it('should display a browser title', () => {
        cy.shouldHaveBrowserTitle('Marvel Developer Portal');
    });

    it('should display standard header', () => {
        cy.get('#marvel-widget-header').should('exist');
    });

    it('should display desktop menu', () => {
        cy.get('#mvl-user-menu__desktop').should('exist');
    });

    it('should display SIGN IN link', () => {
        cy.get('.sign-in')
        .should('have.attr', 'href', 'https://developer.marvel.com/signin?referer=https%3A%2F%2Fdeveloper.marvel.com%2F')
        .should('have.text', 'Sign InSign in');
    });

    it('should display seperator | between SIGN IN and JOIN', () => {
        cy.get('.separator').should('contain', '|');
    });

    it('should display JOIN link', () => {
        cy.get('.join-dropdown')
        .should('have.attr', 'href', 'https://developer.marvel.com/register?referer=https%3A%2F%2Fdeveloper.marvel.com%2F')
        .should('have.text', 'Join');
    });

    it('should display desktop nav logo', () => {
        cy.get('.desktopNav__logo').should('exist').should('have.attr', 'href', '/');
    });

    it('should display desktop nav logo', () => {
        cy.get('.desktopNav__logo').should('exist').should('have.attr', 'href', '/');
    });

    it('should display MARVEL UNLIMITED link and logo', () => {
        cy.get('a[href$="top"]').should('exist')
        .should('have.attr', 'href', 'https://developer.marvel.com/unlimited?cid=dcom_navigation_20210331_unlimited_top')
        .find('img').should('have.attr', 'src', 'https://cdn.marvel.com/u/prod/marvel/images/mu/web/2021/icon-mu-shield.png')
    });

    it('should display MARVEL UNLIMITED and SUBSCRIBE text', () => {
        cy.contains('p', 'Marvel Unlimited');
        cy.contains('span', 'Subscribe');
    });

    it('should display lower home header', () => {
        cy.get('.desktopNav__lower').should('exist');
    });

    it('should display lower home header links', () => {
        cy.validateLowerHomeHeaderLinks('ul[class="desktopNav__linkContainer"]>li');
    });
});
