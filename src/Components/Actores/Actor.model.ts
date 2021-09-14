export default interface actorCrearDTO{
    nombre: string;
    fechaNacimiento?: Date;
    foto?: File;
    fotoUrl?: string;
    biografia?: string;
}

export interface ActorPeliculaDTO{
    id: number;
    nombre:string;
    personaje: string;
    foto: string;
}