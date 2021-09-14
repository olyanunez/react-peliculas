import { Field } from "formik";

export default function FormGroupCheckbox(props: formGroupCheckBoxProps){

    return(
        <>
            <div className="form-group form-check">
                <Field type="checkbox" className="form-check-input" id={props.campo} name={props.campo}/>
                <label htmlFor={props.campo}>{props.label}</label>
            </div>
        </>
    )
}

interface formGroupCheckBoxProps{
    label: string;
    campo: string;
    checked?: boolean;
}

FormGroupCheckbox.defaultProps = {
    checked: false
}