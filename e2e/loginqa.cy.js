describe('Тестирование login.qa.studio', function () {
    
    it('1.1 Ввод верных логина и пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.clearAllCookies();
        cy.reload();

        cy.get('#loginButton').should('be.disabled');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('be.enabled');
        cy.get('#loginButton').click();

        cy.contains('Авторизация прошла успешно').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

    it('1.2 Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.clearAllCookies();
        cy.reload();

        cy.get('#forgotEmailButton').click();

        cy.get('#mailForgot').type('radiantbald@gmail.com');
        cy.get('#restoreEmailButton').click();

        cy.contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon');
    })

    it('1.3 Ввод верного логина и неверного пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.clearAllCookies();
        cy.reload();

        cy.get('#loginButton').should('be.disabled');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastudio2');
        cy.get('#loginButton').should('be.enabled');
        cy.get('#loginButton').click();

        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon');
    })

    it('1.4 Ввод неверного логина и верного пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.clearAllCookies();
        cy.reload();

        cy.get('#loginButton').should('be.disabled');
        cy.get('#mail').type('radiantbald@gmail.com');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('be.enabled');
        cy.get('#loginButton').click();

        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon');
    })

    it('1.5 Ввод логина без @ и верного пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.clearAllCookies();
        cy.reload();

        cy.get('#loginButton').should('be.disabled');
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('be.enabled');
        cy.get('#loginButton').click();

        cy.contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon');
    })

    it('1.6 Приведение прописных букв к строчным', function () {
        cy.visit('https://login.qa.studio/');
        cy.clearAllCookies();
        cy.reload();

        cy.get('#loginButton').should('be.disabled');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('be.enabled');
        cy.get('#loginButton').click();

        cy.contains('Авторизация прошла успешно').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

})
