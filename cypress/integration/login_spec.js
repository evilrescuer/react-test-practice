describe('Login page', () => {
  beforeEach(() => {
    cy.visit('/register');
    cy.fixture('user').then((user) => {
      // eslint-disable-next-line no-param-reassign
      user.id = 1;
      localStorage.setItem('users', JSON.stringify([user]));
      cy.visit('/login');
    });
  });

  it('should login successfully', () => {
    cy.fixture('user').then((user) => {
      const {
        username, password,
      } = user;

      cy.get('input[data-cy=username]').type(username);
      cy.get('input[data-cy=password]').type(password);
      cy.get('button[data-cy=login]').click();
    });
  });
});
