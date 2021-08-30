import {useFormikContext } from "formik";
import MostrarErrorCampo from "./MostrarErrorCampo";

export default function FormGroupFecha(props: formGroupFechaProps){
    const {values,validateForm, touched, errors} = useFormikContext<any>();
    return(
        <>
            <div className="form-group date" data-provide="datepicker">
                <label htmlFor={props.name}>{props.label}</label>
                <input type="date" className="form-control" id={props.name} name={props.name}
                defaultValue={values[props.name]?.toLocaleDateString('en-CA')}
                onChange ={e => {
                    const fecha = new Date(e.currentTarget.value + "T00:00:00");
                    values[props.name] = fecha;
                    validateForm();
                }}
                />
                <div className="input-group-addon">
                    <span className="glyphicon glyphicon-th"></span>
                </div>
                {touched[props.name] && errors[props.name]?<MostrarErrorCampo mensaje={errors[props.name]?.toString()!}/>: null}
            </div>
        </>
    )
}

interface formGroupFechaProps{
    name: string;
    label: string;
}
