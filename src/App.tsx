import { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Menu from './Components/Menus/Menu';
import rutas from './route.config';
import configurarValidaciones from './Validaciones';
configurarValidaciones();

function App() {
  
  useEffect(()=>{
    console.log(rutas);
  })

  return (
    <>
      <BrowserRouter>
        <Menu/>
        <div className="container">
          <Switch>
            {rutas.map(ruta =>
              <Route key={ruta.path} exact={ruta.exact} path={ruta.path}>
                <ruta.componente/>
              </Route>
            )}
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
