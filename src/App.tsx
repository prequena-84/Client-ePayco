import React, { useEffect,useState} from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import NavBar from "./components/navbar/navbar-menu";
import type { IMenu } from "./typescript/interface/html/html.interfaces";

// Importación de Modulos de los proyectos.
import Home from "./modules/main/home";
import FormAddUsers from "./modules/users/add-users";
import GetUsers from "./modules/users/get-users";
import FormAddTransaction from "./modules/transaction/add-transaction";
import VerifyTransaction from "./modules/transaction/verify-transaction";

function App() {
  const [ menu, setMenu ] = useState<IMenu[]>([]);
  // Carga de Json de Configuración en el Router No tocar
  useEffect( () => {
      fetch("/config-nav-bar.json")
      .then( resp => resp.json() )
      .then( data => setMenu(data) ) 
      .catch( err => console.error(err) );
  },[]);

  // Mapeo entre rutas y componentes, aqui se agrega los nuevo menu y submenu que se van integrar al proyecto.
  const routerComponents: Record<any, React.ReactElement> = {
    "/":<Home/>,
    "/add-users":<FormAddUsers/>,
    "/get-users":<GetUsers/>,
    "/add-transactions":<FormAddTransaction/>,
    "/verify-transaction":<VerifyTransaction/>,
  };

  // Render dinámico de las rutas No tocar.
  const renderRoutes = () => {
    return menu.flatMap(item => 
      item.submenu.map((sub,index) => {
        const component = routerComponents[sub.link];
        return <Route key={`link-${sub.label}-${index}`} path={sub.link} element={component} />
      }),
    );
  };
  // Retorno dinamico no tocar
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          {renderRoutes()}
          <Route path="*" element={<div>Página no encontrada</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;