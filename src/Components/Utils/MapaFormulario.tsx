import { useFormikContext } from "formik";
import CoordenadaDTO from "./coordenadas.model";
import Mapa from "./Mapa";

export default function MapaFormulario(props: mapaFormularioProps){

    const {values} = useFormikContext<any>();

    const actualizarCampos = (coordenadas: CoordenadaDTO) =>{
        values[props.campoLat] = coordenadas.lat;
        values[props.campoLng] = coordenadas.lng;
    }

    return(
        <>
            <Mapa 
                coordenadas={props.coordenadas}
                manejarClickMapa={actualizarCampos}
            />
        </>
    )
}

interface mapaFormularioProps{
    coordenadas: CoordenadaDTO[];
    campoLat: string;
    campoLng: string;
}

MapaFormulario.defaultProps={
    coordenadas: []
}