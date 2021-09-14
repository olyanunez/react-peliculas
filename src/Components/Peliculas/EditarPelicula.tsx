import { ActorPeliculaDTO } from "../Actores/Actor.model";
import { cineDTO } from "../Cines/Cines.model";
import { generoDTO } from "../Generos/generos.model";
import FormularioPeliculas from "./FormularioPeliculas";

export default function EditarPelicula(){
    
    const generosSeleccionados: generoDTO[] = [
        {id:1, nombre: "Accion"},
        {id:3, nombre: "Comedia"},
    ]
    const generosNoSeleccionados: generoDTO[] = [
        {id:2, nombre: "Terror"},
    ]


    const cinesSeleccionados: cineDTO[] = [
        {id:1, nombre: "Palacio del Cine"},
        {id:3, nombre: "Cine Centro"},
    ]

    const cinesNoSeleccionados: cineDTO[] = [
        {id:2, nombre: "Cinemax"},
    ]

    const actoresSeleccionados: ActorPeliculaDTO[] = [
        {
            id:1, nombre: "Oliver", personaje:"Spider-Man", foto:"https://m.media-amazon.com/images/M/MV5BNzZiNTEyNTItYjNhMS00YjI2LWIwMWQtZmYwYTRlNjMyZTJjXkEyXkFqcGdeQXVyMTExNzQzMDE0._V1_UX214_CR0,0,214,317_AL_.jpg"
        }
    ]
    return(
        <>
            Editar Pelicula

            <FormularioPeliculas  
                modelo={{titulo: "Spider-Man", enCines: true, trailer:"url", fechaLanzamiento: new Date('2019-01-01T00:00:00'), generosIds:[2,6,5]}}
                onSubmit={valores => console.log(valores)}
                generosSeleccionados={generosSeleccionados}
                generosNoSeleccionados={generosNoSeleccionados}
                cinesSeleccionados={cinesSeleccionados}
                cinesNoSeleccionados={cinesNoSeleccionados}
                actoresSeleccionados={actoresSeleccionados}
            />
        </>
    )
}