import CinesCreacionDTO from "./Cines.model";
import FormularioCines from "./FormularioCines";

export default function CrearCine(){

    let crearCine = (valores: CinesCreacionDTO) =>{
        console.log(valores)
    }
    return(
        <>
            <h3>Crear Cine</h3>
            <FormularioCines modelo ={{nombre: ""}} onSubmit={valores => crearCine(valores)}/>
        </>
    )
}