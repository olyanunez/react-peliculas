import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import Button from "../Utils/Button";
import Input from "../Utils/Input";
import actorCrearDTO from "./Actor.model";
import * as Yup from "yup";
import FormGroupFecha from "../Utils/FormGroupFecha";
import FormGroupImagen from "../Utils/FormGroupImagen";

export default function FormularioActores(props: formularioActoresProps){

    return(
        <>
            <Formik
                initialValues={props.modelo}
                onSubmit={props.onSubmit}
                validationSchema = {Yup.object({
                    nombre: Yup.string().required("Este campo es requerido").primeraLetraMayuscula(),
                    fechaNacimiento: Yup.date().nullable().required("Este campo es requerido")
                })}
            >
                {(formikProps) => (
                    <Form>
                        <Input name="nombre" label="Nombre"/>
                        <FormGroupFecha label="Fecha de Nacimiento" name="fechaNacimiento" />
                        <FormGroupImagen name="foto" label="Foto" imagenURL={props.modelo.fotoUrl}/>


                        <Button disabled={formikProps.isSubmitting} type="submit">Guardar</Button>
                        <Link className="btn btn-secondary" to="/actores">Cancelar</Link>
                    </Form>
                )}
            </Formik>
        </>
    )
}


interface formularioActoresProps{
    modelo: actorCrearDTO,
    onSubmit(valores: actorCrearDTO, acciones: FormikHelpers<actorCrearDTO>): void;
}