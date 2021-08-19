import FormularioActores from "./FormularioActores";

export default function CrearActor(){

    return(
        <>
            <h3>Crear Actor</h3>
            <FormularioActores
                modelo={{nombre:'', fechaNacimiento: undefined}}
                onSubmit={valores => console.log(valores)}
            />
        </>
    )
}