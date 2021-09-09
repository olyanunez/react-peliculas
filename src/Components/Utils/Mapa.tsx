import { MapContainer, TileLayer, useMapEvent } from "react-leaflet"
import L, { Marker } from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import 'leaflet/dist/leaflet.css'
import CoordenadasDTO from "./CoordenadasDTO"
import { useState } from "react"

export default function Mapa(props: mapaProps){
    
    const [coordenadas, setCoordenadas] = useState<CoordenadasDTO[]>([]);
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
                    }}
                />
                {coordenadas.map(coordenada => <Marcador key={[coordenada.latitud, coordenada.longitud]}/>)}
            </MapContainer>
    )
}

function ClickMapa(props: clickMapaProps){
    useMapEvent('click', e => {
        props.setPunto({latitud: e.latlng.lat, longitud: e.latlng.lng})
    })

    return null;
}

interface clickMapaProps{
    setPunto(coordenadas: CoordenadasDTO): void;
}

function Marcador(props: CoordenadasDTO){
    
    return(
        <>
            <Marker position={[props.longitud, props.latitud]} />
        </>
    )
}

interface mapaProps{
    height: string;
}

Mapa.defaultProps = {
    height: '500px'
}