import { props } from "cypress/types/bluebird";
import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import Button from "../Utils/Button";
import Input from "../Utils/Input";
import actorCrearDTO from "./Actor.model";

export default function FormularioActores(props: formularioActoresProps){
    return(
        <>
            <Formik
                initialValues={props.modelo}
                onSubmit={props.onSubmit}
            >
                {(formikProps) => (
                    <Form>
                        <Input name="nombre" label="Nombre"/>
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