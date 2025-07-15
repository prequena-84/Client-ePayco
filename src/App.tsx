import { BrowserRouter,Routes,Route } from "react-router-dom";

import NavBar from "./components/navbar/navbar-menu";

import Home from "./modules/main/inicio"; // ok
import FormAddUsers from "./modules/users/add-users"; // ok
import GetUsers from "./modules/users/get-users";

import FormAddTransaction from "./modules/transaction/add-transaction";


import ValidarTransaccion from "./modules/validar-transaccion/validar-token";


function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={ <Home/> }/>                               {/*ok*/}
        <Route path="add-users" element={ <FormAddUsers/> }/>               {/*ok*/}
        <Route path="get-users" element={ <GetUsers/> }/>                   {/*ok*/}
        <Route path="add-transactions" element={ <FormAddTransaction/> }/>  {/*ok*/}
        <Route path="confirmation-transaction" element={ <ValidarTransaccion/> }/>
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
