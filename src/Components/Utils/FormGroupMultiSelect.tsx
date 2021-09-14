import './FormGroupMultiSelect.css'

export default function FormGroupMultiSelect(props:formGroupMultiSelectProps){

    function seleccionar(item: FormGroupMultiSelectModel){
        console.log("Seleccionar")
        const seleccionados = [...props.seleccionados, item];
        const noSeleccionados = props.noSeleccionados.filter(valor => valor !== item);
        props.onChange(seleccionados, noSeleccionados);
    }

    function deseleccionar(item: FormGroupMultiSelectModel){
        console.log("Deseleccionar")
        const noSeleccionados = [...props.noSeleccionados, item];
        const seleccionados = props.seleccionados.filter(valor => valor !== item);

        props.onChange(seleccionados, noSeleccionados);
    }

    function seleccionarTodos(){ 
        console.log("Seseleccionar todo")
        const seleccionados = [...props.seleccionados,...props.noSeleccionados];
        const noSeleccionados: FormGroupMultiSelectModel[] = [];

        props.onChange(seleccionados, noSeleccionados);
    }

    function deSeleccionarTodos(){ 
        console.log("Deseleccionar todo")
        const noSeleccionados = [...props.noSeleccionados,...props.seleccionados];
        const seleccionados: FormGroupMultiSelectModel[] = [];

        props.onChange(seleccionados, noSeleccionados);
    }



    return(
        <>
            <div className="multi-select">
                <ul>
                    {props.noSeleccionados.map(item =>{
                        return <li key={item.llave} onClick={() => seleccionar(item)}>{item.valor}</li>
                    })}
                </ul>
                <div className="multi-select-botones">
                    <button type="button" onClick={() => seleccionarTodos()}>{'>>'}</button>
                    <button type="button" onClick={() => deSeleccionarTodos()}>{'<<'}</button>
                </div>
                <ul>
                    {props.seleccionados.map(item =>{
                        return <li key={item.llave} onClick={() => deseleccionar(item)}>{item.valor}</li>
                    })}
                </ul>
            </div>
        </>
    )
}


interface formGroupMultiSelectProps{
    seleccionados: FormGroupMultiSelectModel[];
    noSeleccionados: FormGroupMultiSelectModel[];
    onChange(seleccionados:FormGroupMultiSelectModel[], noSeleccionados: FormGroupMultiSelectModel[]):void;
}

export interface FormGroupMultiSelectModel{
    llave: number;
    valor: string;
}