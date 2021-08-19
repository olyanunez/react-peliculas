import FormularioGeneros from "./FormularioGeneros";

export default function EditarGenero(){

    return(
        <>
            <h3>Editar Genero</h3>
            <FormularioGeneros modelo={{nombre:'Accion'}} 
            onSubmit={async valores => {
                await new Promise (r => setTimeout(r, 3000));
                console.log(valores);
            }}/>
        </>
    )
}