import { Form, FormikHelpers, Formik } from "formik"
import CinesCreacionDTO from "./Cines.model"
import * as Yup from 'yup'
import Input from "../Utils/Input"
import Button from "../Utils/Button"
import { Link } from "react-router-dom"
import Mapa from "../Utils/Mapa"

export default function FormularioCines(props: formularioCinesProps){

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
                        <Input name="nombre" label="Nombre" />

                        <div style={{marginBottom: '1rem'}}>
                            <Mapa />
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