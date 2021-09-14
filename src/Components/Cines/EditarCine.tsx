import CinesCreacionDTO from "./Cines.model"
import FormularioCines from "./FormularioCines"

export default function EditarCine(){

    let crearCine = (valores: CinesCreacionDTO) =>{
        console.log(valores)
    }
    return(
        <>
            <h3>Editar Cine</h3>
            <FormularioCines modelo ={{nombre: "Sambil", latitud:18.48232156144799, longitud: -69.91219520586122}} onSubmit={valores => crearCine(valores)}/>
        </>
    )
}