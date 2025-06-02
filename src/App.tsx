import { BrowserRouter,Routes,Route } from "react-router-dom";

import NavBar from "./components/navbar/navbar-menu";
import Inicio from "./modules/main/inicio";
import FormRegistroUsuario from "./modules/registro/registro-usuario";
import FormRegistroTransaccion from "./modules/registro/registro-transaccion";
import ValidarTransaccion from "./modules/validar-transaccion/validar-token"

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={ <Inicio/> }/>
        <Route path="registro-usuario" element={ <FormRegistroUsuario/> }/>
        <Route path="registro-transaccion" element={ <FormRegistroTransaccion/> }/>
        <Route path="confirmacion-transaccion" element={ <ValidarTransaccion/> }/>
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
