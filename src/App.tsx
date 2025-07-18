import React, { useEffect,useState} from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import NavBar from "./components/navbar/navbar-menu";
import Home from "./modules/main/home"; // ok
import FormAddUsers from "./modules/users/add-users"; // ok
import GetUsers from "./modules/users/get-users"; // ok
import FormAddTransaction from "./modules/transaction/add-transaction"; // ok
import VerifyTransaction from "./modules/transaction/verify-transaction"; // ok
import type { IMenu } from "./typescript/interface/html/html.interfaces";

function App() {

  const [ menu, setMenu ] = useState<IMenu[]>([]);

  useEffect( () => {
      fetch("/config-nav-bar.json")
      .then( resp => resp.json() )
      .then( data => setMenu(data) ) 
      .catch( err => console.error(err) );
  },[]);

  // Quede adecuar el menu dinamicamente al archivo de configuración de menu y submenu
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path={menu[0].submenu[0].link} element={ <FormAddUsers/> }/>
        <Route path="get-users" element={ <GetUsers/> }/>
        <Route path="add-transactions" element={ <FormAddTransaction/> }/>
        <Route path="verify-transaction" element={ <VerifyTransaction/> }/>
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;