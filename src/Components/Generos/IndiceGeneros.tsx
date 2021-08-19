import { Link } from "react-router-dom";

export default function IndiceGeneros(){

    return(
        <>
            <h3>Indice de generos</h3>
            <Link className="crearGenero" to="generos/crear" >Crear Genero</Link>
        </>
    )
}