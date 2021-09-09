import CinesCreacionDTO from "./Cines.model"
import FormularioCines from "./FormularioCines"

export default function EditarCine(){

    let crearCine = (valores: CinesCreacionDTO) =>{
        console.log(valores)
    }
    return(
        <>
            <h3>Editar Cine</h3>
            <FormularioCines modelo ={{nombre: ""}} onSubmit={valores => crearCine(valores)}/>
        </>
    )
}