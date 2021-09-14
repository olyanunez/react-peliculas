import { Formik, Form, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import Button from "../Utils/Button";
import FormGroupTextBox from "../Utils/FormGroupTextBox";
import * as Yup from 'yup';
import { generoCreacionDTO } from "./generos.model";

export default function FormularioGeneros(props: formularioGenerosProps){

    return(
        <>
            <Formik
                // initialValues = {{
                //     nombre: '',

                // }}
                // onSubmit = {async values => {
                //     await new Promise (r => setTimeout(r, 3000));
                //     console.log(values);
                // }}

                initialValues = {props.modelo}
                onSubmit = {props.onSubmit}

                validationSchema = {Yup.object({
                    nombre: Yup.string().required('Este campo es requerido').primeraLetraMayuscula()
                })}
            >
                {(formikProps) => (
                    <Form>
                        <FormGroupTextBox name="nombre" label="Nombre" place-holder="Nombre genero"/>
                        <Button disabled = {formikProps.isSubmitting} type="submit">Guardar</Button>
                        <Link className="btn btn-secondary " to="/generos">Cancelar</Link>
                    </Form>
                )}
            </Formik>
        </>
    )
}

interface formularioGenerosProps{
    modelo: generoCreacionDTO;
    onSubmit(valores: generoCreacionDTO, accion: FormikHelpers<generoCreacionDTO>): void;
}