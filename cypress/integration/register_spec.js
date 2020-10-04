describe('Register page', () => {
  beforeEach(() => {
    localStorage.removeItem('user');
    cy.visit('/register');
  });

  it('should register success', () => {
    cy.fixture('user').then((user) => {
      const {
        firstName, lastName, username, password,
      } = user;

      cy.get('input[data-cy=firstName]').type(firstName);
      cy.get('input[data-cy=lastName]').type(lastName);
      cy.get('input[data-cy=username]').type(username);
      cy.get('input[data-cy=password]').type(password);
      cy.get('button').click();

      cy.url().should('include', '/login');
    });
  });

  it('should register failed when given all empty form', () => {
    cy.get('button').click();

    cy.url().should('include', '/register');
    cy.get('form[data-cy=form]').contains('First Name is required');
    cy.get('form[data-cy=form]').contains('Last Name is required');
    cy.get('form[data-cy=form]').contains('Username is required');
    cy.get('form[data-cy=form]').contains('Password is required');
  });
});
