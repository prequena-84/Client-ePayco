import { BrowserRouter,Routes,Route } from "react-router-dom";

import NavBar from "./components/navbar/navbar-menu";
import Inicio from "./modules/main/inicio";
import FormRegistroUsuario from "./modules/registro/registro-usuario";
import FormRegistroTransaccion from "./modules/registro/registro-transaccion";

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={ <Inicio/> }/>
        <Route path="registro-usuario" element={ <FormRegistroUsuario/> }/>
        <Route path="registro-transaccion" element={ <FormRegistroTransaccion/> }/>
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
