import { useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import { act } from "react-dom/test-utils";
import { ReactElement } from "react-markdown/lib/react-markdown";
import actorCrearDTO, { ActorPeliculaDTO } from "./Actor.model";

export default function TypeAheadeActores(props:typeAheadeActoresProps){
    const actores: ActorPeliculaDTO[] =[
        {
            id:1, nombre: "Oliver", personaje:"Spider-Man", foto:"https://m.media-amazon.com/images/M/MV5BNzZiNTEyNTItYjNhMS00YjI2LWIwMWQtZmYwYTRlNjMyZTJjXkEyXkFqcGdeQXVyMTExNzQzMDE0._V1_UX214_CR0,0,214,317_AL_.jpg"
        },
        {
            id:2, nombre: "Fernando", personaje:"Octopus", foto:"https://m.media-amazon.com/images/M/MV5BMTQ1NTQwMTYxNl5BMl5BanBnXkFtZTYwMjA1MzY1._V1_UX214_CR0,0,214,317_AL_.jpg"
        },
        {
            id:3, nombre: "Felipe", personaje:"Ironman", foto:"https://m.media-amazon.com/images/M/MV5BNTczMzk1MjU1MV5BMl5BanBnXkFtZTcwNDk2MzAyMg@@._V1_UY317_CR2,0,214,317_AL_.jpg"
        },
    ]

    const seleccion: ActorPeliculaDTO[] = [];

    const [elementoArrastrado, setElementoArrastrado] = useState<ActorPeliculaDTO | undefined>(undefined);

    function manejarDragStart(actor: ActorPeliculaDTO){
        setElementoArrastrado(actor);
    }

    function manejarDragOver(actor: ActorPeliculaDTO){
        if(!elementoArrastrado){
            return;
        }

        if(actor.id !== elementoArrastrado.id){
            const elementoArrastradoIndice = props.actores.findIndex(x => x.id === elementoArrastrado.id);
            const actorIndice = props.actores.findIndex(x => x.id === actor.id);

            const actores = [...props.actores];
            actores[actorIndice] = elementoArrastrado;
            actores[elementoArrastradoIndice] = actor;
        props.onAdd(actores);

        }
    }

    return(
        <>
            <label htmlFor="">Actores</label>
            <Typeahead
                id="typeaheadactores"
                onChange={actores =>{
                    if(props.actores.findIndex(x => x.id === actores[0].id) === -1){
                        props.onAdd([...props.actores,actores[0]])
                    }
                }}
                options={actores}
                labelKey={actor => actor.nombre}
                filterBy={['nombre']}
                placeholder="Escriba el nombre del actor..."
                minLength={2}
                flip={true}
                renderMenuItemChildren={actor => (
                    <>
                        <img src={actor.foto} alt="imagen actor"
                            style={{
                                    height: '64px',
                                    marginRight: '10px',
                                    width: '64px'
                            }}
                        />
                        <span>{actor.nombre}</span>
                    </>
                )}

                selected={seleccion}
            />

            <ul className="list-group">
                {props.actores.map(actor => 
                    <li 
                        draggable={true}
                        onDragStart={() => manejarDragStart(actor)}
                        onDragOver={() => manejarDragOver(actor)}
                        className="list-group-item list-group-item-action" key={actor.id}
                        
                    > {props.listadoUI(actor)}
                        <span className="badge badge-primary badge-pill pointer"
                            style={{marginLeft:'0.5rem'}}
                            onClick={() => props.onRemove(actor)}
                        >
                                X
                        </span>
                    </li>
                )}
            </ul>
        </>
    )
}


interface typeAheadeActoresProps{
    actores: ActorPeliculaDTO[];
    onAdd(actores: ActorPeliculaDTO[]): void;
    listadoUI(actor:ActorPeliculaDTO): ReactElement;
    onRemove(actor:ActorPeliculaDTO): void;
}