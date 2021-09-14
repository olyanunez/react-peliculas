import { Form, FormikHelpers, Formik } from "formik"
import CinesCreacionDTO from "./Cines.model"
import * as Yup from 'yup'
import FormGroupTextBox from "../Utils/FormGroupTextBox"
import Button from "../Utils/Button"
import { Link } from "react-router-dom"
import MapaFormulario from "../Utils/MapaFormulario"
import CoordenadaDTO from "../Utils/coordenadas.model"

export default function FormularioCines(props: formularioCinesProps){

    function transformarCoordenadas():CoordenadaDTO[] | undefined {
        if(props.modelo.latitud && props.modelo.longitud){

            const respuesta: CoordenadaDTO = {lat:props.modelo.latitud, lng:props.modelo.longitud}
            return [respuesta];
        }

        return undefined;
    }
    return(
        <>
            <Formik
                initialValues = {props.modelo}
                onSubmit = {props.onSubmit}
                validationSchema = {Yup.object({
                    nombre: Yup.string().required("Este campo es requerido").primeraLetraMayuscula()
                })}
            >
                {(formikProps) =>(
                    <Form>
                        <FormGroupTextBox name="nombre" label="Nombre" />

                        <div style={{marginBottom: '1rem'}}>
                            <MapaFormulario coordenadas={transformarCoordenadas()} campoLat={"latitud"} campoLng={"longitud"} />
                        </div>

                        <Button type="submit" disabled={formikProps.isSubmitting}>Guardar</Button>
                        <Link className="btn btn-secondary" to="/cines">Cancelar</Link>
                    </Form>
                )}
            </Formik>
        </>
    )
}

interface formularioCinesProps{
    modelo: CinesCreacionDTO;
    onSubmit(valores: CinesCreacionDTO, acciones: FormikHelpers<CinesCreacionDTO>): void;
}