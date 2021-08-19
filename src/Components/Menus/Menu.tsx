import { NavLink } from "react-router-dom";
import rutas from '../../route.config';

export default function menu(){

    const claseActiva = "active";

    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" activeClassName={claseActiva} to="/">React Peliculas</NavLink>
                    <div className="collapse navbar-collapse">
                        {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName={claseActiva} to="/generos">Generos</NavLink>
                            </li>
                        </ul> */}
                        {rutas.filter(ruta => ruta.path.split("/").length === 2 && ruta.name !== "").map(ruta =>(
                            <ul key={"ul"+ruta.path} className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li key={"li"+ruta.path} className="nav-item">
                                    <NavLink key={ruta.path} className="nav-link" activeClassName={claseActiva} to={ruta.path}>{ruta.name}</NavLink>
                                </li>
                            </ul>
                        ))}
                    </div>
                </div>
            </nav>
        </>
    );
}