import FormularioActores from "./FormularioActores";

export default function EditarActor(){

    return(
        <>
            <h3>Editar Actor</h3>
            <FormularioActores
                modelo={{nombre:'Pedro Casals', fechaNacimiento: undefined}}
                onSubmit={valores => console.log(valores)}
            />
        </>
    )
}