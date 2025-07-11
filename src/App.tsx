import { BrowserRouter,Routes,Route } from "react-router-dom";

import NavBar from "./components/navbar/navbar-menu";
import Inicio from "./modules/main/inicio";
import FormRegistroUsuario from "./modules/registro/registro-usuario";
import FormRegistroTransaccion from "./modules/registro/registro-transaccion";
import ValidarTransaccion from "./modules/validar-transaccion/validar-token";
import RegistroUsuarios from "./modules/consulta/consulta-usuario";

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={ <Inicio/> }/>
        <Route path="add-user" element={ <FormRegistroUsuario/> }/>
        <Route path="get-usuario" element={ <RegistroUsuarios/> }/>
        <Route path="add-transaction" element={ <FormRegistroTransaccion/> }/>
        <Route path="confirmation-transaction" element={ <ValidarTransaccion/> }/>
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
