describe('Тестирование sh3910517.c.had.su', function () {
    
    it('Длинная проверка', function () {
        cy.visit('https://sh3910517.c.had.su/');
        cy.clearAllCookies();
        cy.reload();

        cy.get('.post-11342 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
        cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click().click();
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        cy.get('#cart-modal > .off-modal-layer').click();
        cy.get('.header-left-items > .site-branding > .logo > .logo-dark').click();

        cy.get('.post-11337 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        cy.get('.checkout').click();

        cy.get('#billing_first_name').type('Carl');
        cy.get('#billing_last_name').type('Johnson');
        cy.get('#billing_company').type('QA.Studio');
        cy.get('#billing_address_1').type('Groove st. 23');
        cy.get('#billing_city').type('Los Santos');
        cy.get('#billing_state').type('Ballas');
        cy.get('#billing_postcode').type('666999');
        cy.get('#billing_phone').type('+1222333444');
        cy.get('#billing_email').type('sanandreas@gmail.com');
        cy.get('#place_order').click();
    })
})