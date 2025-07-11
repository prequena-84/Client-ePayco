import { BrowserRouter,Routes,Route } from "react-router-dom";

import NavBar from "./components/navbar/navbar-menu";

import Home from "./modules/main/inicio"; // ok
import FormAddUsers from "./modules/registro/registro-usuario"; // ok

import FormRegistroTransaccion from "./modules/registro/registro-transaccion";
import ValidarTransaccion from "./modules/validar-transaccion/validar-token";
import RegistroUsuarios from "./modules/consulta/consulta-usuario";

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={ <Home/> }/> {/*ok*/}
        <Route path="add-user" element={ <FormAddUsers/> }/>  {/*ok*/}
        <Route path="get-usuario" element={ <RegistroUsuarios/> }/> {/*Quede en este Modulo*/}
        <Route path="add-transaction" element={ <FormRegistroTransaccion/> }/>
        <Route path="confirmation-transaction" element={ <ValidarTransaccion/> }/>
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
