import CrearActor from "./Components/Actores/CrearActor";
import EditarActor from "./Components/Actores/EditarActor";
import IndiceActores from "./Components/Actores/IndiceActores";
import CrearCine from "./Components/Cines/CrearCine";
import EditarCine from "./Components/Cines/EditarCine";
import IndiceCines from "./Components/Cines/IndiceCine";
import CrearGenero from "./Components/Generos/CrearGenero";
import EditarGenero from "./Components/Generos/EditarGenero";
import IndiceGeneros from "./Components/Generos/IndiceGeneros";
import LandingPage from "./Components/LandingPage/LandingPage";
import CrearPelicula from "./Components/Peliculas/CrearPelicula";
import EditarPelicula from "./Components/Peliculas/EditarPelicula";
import FiltroPeliculas from "./Components/Peliculas/FiltroPeliculas";
import RedirecionarALandingPage from "./Components/Utils/RedirecionarALandingPage";

const rutas = [
    {name: 'Crear Genero', path:'/generos/crear', componente: CrearGenero},
    {name: 'Editar Genero', path:'/generos/editar/:id(\\d+)', componente: EditarGenero},
    {name: 'Generos', path:'/generos', componente: IndiceGeneros, exact: true},

    {name: 'Crear Actor', path:'/actores/crear', componente: CrearActor},
    {name: 'Editar Actor', path: '/actores/editar/:id(\\d+)', componente: EditarActor},
    {name: 'Actores', path:'/actores', componente: IndiceActores, exact: true},

    {name: 'Crear Cine', path:'/cines/crear', componente: CrearCine},
    {name: 'Editar Cine', path:'/cines/editar/:id(\\d+)', componente: EditarCine},
    {name: 'Cines', path:'/cines', componente: IndiceCines, exact: true},

    {name: 'Crear Pelicula', path:'/peliculas/crear', componente: CrearPelicula},
    {name: 'Editar Pelicula', path:'/peliculas/editar/:id(\\d+)', componente: EditarPelicula},
    {name: 'Filtrar Peliculas', path:'/peliculas/filtrar', componente: FiltroPeliculas},


    {name:'', path:'/', componente: LandingPage, exact: true},
    {name:'', path: '*', componente: RedirecionarALandingPage}
]

export default rutas;