import PeliculaIndividual from "./PeliculaIndividual";
import { pelicula } from "./peliculas.model";
import css from './ListadoPeliculas.module.css';
import ListadoGenerico from "../Utils/ListadoGenerico";

export default function ListadoPeliculas(props:listadoPeliculasProps){

        return(
            <>
                <ListadoGenerico listado = {props.peliculas}>
                    <div className={css.div}>
                        {props.peliculas?.map(peli =>
                            <PeliculaIndividual key={peli.id} pelicula={peli} />
                        )}
                    </div>
                </ListadoGenerico>
            </>
        )
}

interface listadoPeliculasProps{
    peliculas?: pelicula[]
}