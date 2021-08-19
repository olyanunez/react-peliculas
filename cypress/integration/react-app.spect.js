describe('React App', () =>{

    beforeEach(() => {
        cy.visit('http://localhost:3000');
    })
    it('fontpage can be opened',() =>{
        cy.contains('En Cartelera');
    })

    const generos = it('Generos page can be opened',() =>{
        cy.contains('Generos').click();
    })
    
    // generos.
    // it('Generos page can be opened',() =>{
    //     cy.get("#crearGenero").click()
    // })
})