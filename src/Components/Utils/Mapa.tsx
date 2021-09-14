import { MapContainer, TileLayer, useMapEvent, Marker } from "react-leaflet"
import L from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import 'leaflet/dist/leaflet.css'
import CoordenadaDTO from "./coordenadas.model"
import { useState } from "react"

export default function Mapa(props: mapaProps){
    
    const [coordenadas, setCoordenadas] = useState<CoordenadaDTO[]>(props.coordenadas);
    let DefaultIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow,
        iconAnchor: [16, 37]
    })

    L.Marker.prototype.options.icon = DefaultIcon;

    return(
            <MapContainer
                center={[18.47629432310881, -69.91794192917318]}
                zoom={14}
                style={{height: props.height}}
            >
                <TileLayer attribution="React Peliculas"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <ClickMapa 
                    setPunto = { coordenadas => {
                        setCoordenadas([coordenadas])
                        props.manejarClickMapa(coordenadas)
                    }}
                />
                {/* Para un unico marcador */}
                {/* <Marker position={[111,-93]}/> */}

                {/* Para varios marcadores */}
                {coordenadas.map(coordenada => <Marcador key={coordenada.lat + coordenada.lng} {...coordenada}/>)}
            </MapContainer>
    )
}

function ClickMapa(props: clickMapaProps){
    useMapEvent('click', e => {
        props.setPunto({lat: e.latlng.lat, lng: e.latlng.lng})
    })

    return null;
}

interface clickMapaProps{
    setPunto(coordenadas: CoordenadaDTO): void;
}

function Marcador(props: CoordenadaDTO){
    return(
        <>
            <Marker position={[props.lat,props.lng]}/>
        </>
    )
}

interface mapaProps{
    height: string;
    coordenadas: CoordenadaDTO[];
    manejarClickMapa(coordenadas: CoordenadaDTO): void;
}

Mapa.defaultProps = {
    height: '500px'
}