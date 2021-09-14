import { StringLiteralLike } from "typescript";
import { ActorPeliculaDTO } from "../Actores/Actor.model";
import { generoDTO } from "../Generos/generos.model";

export interface pelicula{
    id: number;
    titulo: string;
    poster: string;
}

export interface peliculaCreacionDTO{
    titulo: string;
    enCines: boolean;
    trailer: string;
    fechaLanzamiento?: Date;
    poster?: File;
    posterURL?: string;
    generosIds?: number[]
    cinesIds?: number[];
    actores?: ActorPeliculaDTO[]
}
export interface landingPageDTO{
    enCartelera?: pelicula[];
    proximosEstrenos?: pelicula[];
}