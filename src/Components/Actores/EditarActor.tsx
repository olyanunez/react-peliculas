import FormularioActores from "./FormularioActores";

export default function EditarActor(){

    return(
        <>
            <h3>Editar Actor</h3>
            <FormularioActores
                modelo={
                    {
                        nombre:'Pedro Casals', 
                        fechaNacimiento: new Date('1995-05-16T00:00:00'),
                        fotoUrl : 'https://m.media-amazon.com/images/M/MV5BNzZiNTEyNTItYjNhMS00YjI2LWIwMWQtZmYwYTRlNjMyZTJjXkEyXkFqcGdeQXVyMTExNzQzMDE0._V1_UX214_CR0,0,214,317_AL_.jpg'
                    }
                }
                onSubmit={valores => console.log(valores)}
            />
        </>
    )
}