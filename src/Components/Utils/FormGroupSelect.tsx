import { ErrorMessage} from "formik";
import MostrarErrorCampo from "./MostrarErrorCampo";

export default function FormGroupSelect(props: formGroupSelectProps){
    console.log(props.options)

    return(
        <>
            <div className="form-group">
                {props.label?<label htmlFor={props.name}>{props.label}</label>:null}
                <select name={props.name}>
                    {props.options.map(opcion => {
                        return <option key={opcion.valor} value="1">Hola</option>
                    })}
                </select>
                <ErrorMessage name={props.name}>
                    {mensaje =>
                        <MostrarErrorCampo mensaje={mensaje} />
                    }
                </ErrorMessage>
            </div>
        </>
    )
}



interface formGroupSelectProps{
    name: string;
    label: string;
    options: option[]
}

interface option{
    valor: number;
    label: string;
}