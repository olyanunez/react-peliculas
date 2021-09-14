import { cineDTO } from "../Cines/Cines.model";
import { generoDTO } from "../Generos/generos.model";
import FormularioPeliculas from "./FormularioPeliculas";

export default function CrearPelicula(){

    const generos: generoDTO[] = [
        {id:1, nombre: "Accion"},
        {id:2, nombre: "Terror"},
        {id:3, nombre: "Comedia"},
    ]
    const cines: cineDTO[] = [
        {id:1, nombre: "Palacio del Cine"},
        {id:2, nombre: "Cinemax"},
        {id:3, nombre: "Cine Centro"},
    ]
    return(
        <>
            Crear Pelicula

            <FormularioPeliculas modelo={{titulo: "", enCines: false, trailer:""}}
                onSubmit={valores => console.log(valores)}
                generosSeleccionados={[]}
                generosNoSeleccionados={generos}
                cinesSeleccionados={[]}
                cinesNoSeleccionados={cines}
                actoresSeleccionados={[]}
            />
        </>
    )
}