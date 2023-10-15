before(() => {
    const baseUrl = Cypress.config('baseUrl');

    if (baseUrl.includes('mobile')) {
        cy.request().then((response) => {
            const app = response.body;

            delete app.homepage;
            app.id = app.artifact.replace('spa-', '');
            window.marvel = Object.assign({}, window.marvel, { app });
        });
    } else {
        cy.request(`${Cypress.env('basePath')}`).then((response) => {
            const app = response.body;

            delete app.homepage;

            app.indexPath = `${Cypress.env('basePath')}/${Cypress.env('indexPage')}`;
            app.basePath = Cypress.env('basePath');
            app.indexPage = Cypress.env('indexPage');
            app.id = app.artifact.replace('spa-', '');

            window.marvel = Object.assign({}, window.marvel, { app });
        });
    }
});