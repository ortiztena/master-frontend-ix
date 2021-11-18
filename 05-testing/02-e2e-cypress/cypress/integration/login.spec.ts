describe('Login specs', () => {
  it('visit the login page', () => {
    cy.visit('/');
  });

  it('should name input has the focus when it clicks on it', () => {
    // Arrange

    // Act
    cy.visit('/');
    cy.get('input[name="user"]').click();

    // Assert
    cy.get('input[name="user"]').should('have.focus');
  })


  it('should have input user / password when type on iit', () => {
    // Arrange
    const user = 'admin';
    const password = 'test';
    cy.get('input[name="user"]').as('userInput');
    cy.get('input[name="password"]').as('passwordInput');

    // Act
    cy.visit('/');
    cy.get('@userInput').type(user);
    cy.get('@passwordInput').type(password);
    // Assert
    cy.get('@userInput').should('have.value', user);
    cy.get('@passwordInput').should('have.value', password);
  })
  it('should show an alert with a message when type invalid credentials', () => {
    // Arrange
    const user = 'admin';
    const password = '1234';
    // cy.on('window:alert', cy.stub().as('alertStub'));
    cy.get('input[name="user"]').as('userInput');
    cy.get('input[name="password"]').as('passwordInput');

    // Act
    cy.visit('/');
    cy.get('@userInput').type(user);
    cy.get('@passwordInput').type(password);
    cy.findByRole('button').click();

    // Assert
    cy.get('@userInput').should('have.value', user);
    cy.get('@passwordInput').should('have.value', password);
    cy.findByRole('alert').contains('Usuario y/o password no válidos');
  });
  it('should navigate to submodule-list when type valid credentials', () => {
    // Arrange
    const user = 'admin';
    const password = 'test';
    // cy.on('window:alert', cy.stub().as('alertStub'));
    cy.get('input[name="user"]').as('userInput');
    cy.get('input[name="password"]').as('passwordInput');

    // Act
    cy.visit('/');
    cy.get('@userInput').type(user);
    cy.get('@passwordInput').type(password);
    cy.findByRole('button').click();

    // Assert
    cy.url().should('eq', 'http://localhost:8080/#/submodule-list')
  });
})
