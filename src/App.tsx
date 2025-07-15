import { BrowserRouter,Routes,Route } from "react-router-dom";
import NavBar from "./components/navbar/navbar-menu";
import Home from "./modules/main/home"; // ok
import FormAddUsers from "./modules/users/add-users"; // ok
import GetUsers from "./modules/users/get-users"; // ok
import FormAddTransaction from "./modules/transaction/add-transaction"; // ok
import VerifyTransaction from "./modules/transaction/verify-transaction"; // ok

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={ <Home/> }/>                                     {/*ok*/}
        <Route path="add-users" element={ <FormAddUsers/> }/>                     {/*ok*/}
        <Route path="get-users" element={ <GetUsers/> }/>                         {/*ok*/}
        <Route path="add-transactions" element={ <FormAddTransaction/> }/>  {/*ok*/}
        <Route path="verify-transaction" element={ <VerifyTransaction/> }/> {/*ok*/}
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
//  quede pendiente en realizar la prueba de la App