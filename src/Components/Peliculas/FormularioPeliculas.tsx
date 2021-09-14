import { Form, FormikHelpers, Formik } from "formik";
import { peliculaCreacionDTO } from "./peliculas.model";
import * as Yup from 'yup';
import FormGroupTextBox from "../Utils/FormGroupTextBox";
import Button from "../Utils/Button";
import { Link } from "react-router-dom";
import FormGroupCheckbox from "../Utils/FormGroupCheckbox";
import FormGroupImagen from "../Utils/FormGroupImagen";
import FormGroupFecha from "../Utils/FormGroupFecha";
import FormGroupMultiSelect, { FormGroupMultiSelectModel } from "../Utils/FormGroupMultiSelect";
import { generoDTO } from "../Generos/generos.model";
import { useState } from "react";
import { cineDTO } from "../Cines/Cines.model";
 import TypeAheadeActores from "../Actores/TypeAheadActores";
import actorCrearDTO, { ActorPeliculaDTO } from "../Actores/Actor.model";

export default function FormularioPeliculas(props: formularioPeliculasProps){


    const [generosSeleccionados, setGenerosSeleccionados] = useState(mapearGeneros(props.generosSeleccionados));
    const [generosNoSeleccionados, setGenerosNoSeleccionados] = useState(mapearGeneros(props.generosNoSeleccionados));

    const [cinesSeleccionados, setCinesSeleccionados] = useState(mapearCines(props.cinesSeleccionados));
    const [cinesNoSeleccionados, setCinesNoSeleccionados] = useState(mapearCines(props.cinesNoSeleccionados));
    const [actoresSeleccionados, setActoresSeleccionados] = useState<ActorPeliculaDTO[]>(props.actoresSeleccionados);

    // Yo hubiera hecho esto
    // function mapear(arreglo: generoDTO[]): FormGroupMultiSelectModel[]{
    //El profesor hizo esto
    function mapearGeneros(arreglo: {id:number, nombre: string}[]): FormGroupMultiSelectModel[]{
        return arreglo.map(valor => {
            return{llave: valor.id, valor: valor.nombre}
        })
    }

    function mapearCines(arreglo: cineDTO[]): FormGroupMultiSelectModel[]{
        return arreglo.map(valor => {
            return{llave: valor.id, valor: valor.nombre}
        })
    }
    return(
        <>
            <Formik
                initialValues={props.modelo}
                onSubmit={(valores, acciones) => {
                    valores.generosIds = generosSeleccionados.map(valor => valor.llave);
                    valores.cinesIds =cinesSeleccionados.map(valor => valor.llave);
                    valores.actores = actoresSeleccionados;
                    props.onSubmit(valores, acciones);
                }}
                validationSchema ={Yup.object({
                        titulo: Yup.string().required('Este campo es requerido').primeraLetraMayuscula()
                })}
            >
                {(formikProps) =>(
                    <Form>
                        <FormGroupTextBox name="titulo" label="Titulo"/>
                        <FormGroupCheckbox label="En cines" campo="enCines" checked = {props.modelo.enCines}/>
                        <FormGroupTextBox name="trailer" label="Trailer" />
                        <FormGroupFecha name="fechaLanzamiento" label="Fecha Lanzamiento" />
                        {/* <FormGroupSelect name="genero" label="Genero" 
                            options={listaGeneros}
                        /> */}

                        <div className="form-group">
                            <label htmlFor="">Generos:</label>
                            <FormGroupMultiSelect seleccionados={generosSeleccionados} noSeleccionados={generosNoSeleccionados} onChange={(seleccionados, noSeleccionados) => {
                                setGenerosSeleccionados(seleccionados)
                                setGenerosNoSeleccionados(noSeleccionados)
                            }}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Cines:</label>
                            <FormGroupMultiSelect seleccionados={cinesSeleccionados} noSeleccionados={cinesNoSeleccionados} onChange={(seleccionados, noSeleccionados) => {
                                setCinesSeleccionados(seleccionados)
                                setCinesNoSeleccionados(noSeleccionados)
                            }}/>
                        </div>

                        <div className="form-group">
                            <TypeAheadeActores
                                actores={actoresSeleccionados}
                                onAdd={actores => {
                                    setActoresSeleccionados(actores);
                                }}
                                onRemove={actor => {
                                    const actores = actoresSeleccionados.filter(x => x !== actor);
                                    setActoresSeleccionados(actores);
                                }}
                                listadoUI={(actor:ActorPeliculaDTO) =>
                                    <>
                                        {actor.nombre} / <input type="text" placeholder="Personaje" value={actor.personaje}
                                        onChange={e => {
                                            const indice = actoresSeleccionados.findIndex(x => x.id === actor.id);

                                            const actores = [...actoresSeleccionados];
                                            actores[indice].personaje = e.currentTarget.value;
                                            setActoresSeleccionados(actores);
                                        }}
                                        />
                                    </>
                                }
                            />
                        </div>

                        <FormGroupImagen label="Poster" name="poster" imagenURL={props.modelo.posterURL} />

                        <Button type="submit" disabled={formikProps.isSubmitting}>Guardar</Button>
                        <Link className="btn btn-secondary" to="/cines">Cancelar</Link>
                    </Form>
                )}
            </Formik>
        </>
    )
}

interface formularioPeliculasProps{
    modelo: peliculaCreacionDTO
    onSubmit(valores: peliculaCreacionDTO, acciones: FormikHelpers<peliculaCreacionDTO>):void;
    generosSeleccionados: generoDTO[];
    generosNoSeleccionados: generoDTO[];
    cinesSeleccionados: cineDTO[];
    cinesNoSeleccionados: cineDTO[];
    actoresSeleccionados: ActorPeliculaDTO[];
}