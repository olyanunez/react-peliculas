import { ErrorMessage, Field } from "formik";
import MostrarErrorCampo from "./MostrarErrorCampo";

export default function Input(props: InputProps){

    return (
        <>
            <div className="form-group">
                {props.label ?<label htmlFor={props.name}>{props.label}</label>: null}
                <Field name={props.name} className="form-control" placeholder={props.placeHolder}/>
                <ErrorMessage name={props.name}>{mensaje =>
                    <MostrarErrorCampo mensaje={mensaje} />
                }</ErrorMessage>
            </div>
        </>
    )
}

interface InputProps{
    name: string;
    label?: string;
    placeHolder?: string;
    ref?: any;
}