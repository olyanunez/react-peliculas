import { Form, Formik } from "formik"
import { generoDTO } from "../Generos/generos.model"

export default function FiltroPeliculas(){
    const valorInicial: filtroPeliculasForm = {
        generoId: 0,
        titulo: '',
        proximosEstrenos: false,
        enCines: false
    }

    const generos: generoDTO[] = [
        {
            id: 1,
            nombre: 'Accion'
        },
        {
            id: 2,
            nombre: 'Comedia'
        },
    ]

    return(
        <>
           <h3>Filtrar Peliculas</h3>

            <Formik initialValues = {valorInicial}
                onSubmit={valores => console.log(valores)}
            >
                {(formikProps) => (
                    <Form>
                        <div className="form-inline">
                            <div className="form-group mb-2">
                                <label htmlFor="titulo" className="sr-only">Titulo</label>
                                <input type="text"  className="form-control" id="titulo" placeholder="Titulo de la Pelicula"
                                {...formikProps.getFieldProps('titulo')}
                                />
                            </div>
                            <div className="form-group mx-ms-3 mb-2">
                                <select className="form-control"
                                    {...formikProps.getFieldProps('generoId')}
                                >
                                    <option value="0">--Seleccione un genero--</option>
                                    {generos.map( genero => <option key={genero.id} value={genero.id}>{genero.nombre}</option>
                                    )}
                                </select>
                            </div>
                        </div>
                    </Form>
                )}

            </Formik>
        </>
    )
}

interface filtroPeliculasForm{
    generoId: number;
    titulo: string;
    proximosEstrenos: boolean;
    enCines: boolean;
}