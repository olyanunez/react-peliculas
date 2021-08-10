import { useState, useEffect } from "react";
import ListadoPeliculas from "../Peliculas/ListadoPeliculas";
import { landingPageDTO, pelicula } from "../Peliculas/peliculas.model";

export default function LandingPage(){
    
    const peliculasEnCartelera: pelicula[] = [
        {
        id: 1,
        titulo: 'Spider-Man: Far from Home',
        poster: 'https://lh3.googleusercontent.com/y40rfQEpNfWcgLKA8Vlommyf7wkl-ss_vE9EYcyHjTdwH6-_PW_NEbmL9N-kroGRVO17-KU6KUXP8d39KHifpo9ONeomP5ifF4wAvXxaUuvkvbUY_RykVYSxgX-n4xvOrkswhnrM'
        },
        {
        id: 2,
        titulo: 'Jumanji: The Next Level',
        poster: 'https://play-lh.googleusercontent.com/2i5WTEANxIcSeXhUxRfBUCZe7CG9uIrj6DK5Sy-cCNVFJ05yDeeHWGTFOAdGEEvOtp1l9ey15qATKvY96i0=w200-h300-rw'
        },
        {
        id: 3,
        titulo: 'Star Wars',
        poster: 'https://lumiere-a.akamaihd.net/v1/images/image_c671e2ee.jpeg?region=0%2C0%2C540%2C810'
        },
    ]

    const peliculasProximosEstrenos: pelicula[] = [
        {
        id: 4,
        titulo: 'Madagascar',
        poster: 'https://educayaprende.com/wp-content/uploads/2014/06/madagascar_poster-691x1024.jpg'
        },
        {
        id: 5,
        titulo: 'Liga de la Justicia',
        poster: 'https://es.web.img3.acsta.net/c_310_420/pictures/17/11/08/09/46/1315249.jpg'
        }
    ]

    const [peliculas, setPeliculas] = useState<landingPageDTO>({});

    useEffect(()=> {
        const timeId = setTimeout(()=>{
        setPeliculas({
            enCartelera: peliculasEnCartelera,
            proximosEstrenos: peliculasProximosEstrenos
        })
        }, 500);

        return () => clearInterval(timeId);
    });
    return(
        <>
            <h3>En Cartelera</h3>
              <ListadoPeliculas peliculas={peliculas.enCartelera} />

              <h3>Proximos Estrenos</h3>
              <ListadoPeliculas peliculas={peliculas.proximosEstrenos} />
        </>
    )
}