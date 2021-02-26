describe('Tests the form inputs and validation',()=>{

    beforeEach(()=>cy.visit('http://localhost:3001/'))

    it('should click order now', ()=>{

        cy.get('button').click()

        cy.get('input[name="orderName"]').type('Ed')
        cy.get('select[name="size"]').select('medium')
        cy.get('input[name="sauce"]').check('original')
        cy.get('input[name="pepperoni"]').click()
        cy.get('input[name="cheese"]').click()
        cy.get('button').click()
        cy.get('header').contains('View Cart').click()
    })



})