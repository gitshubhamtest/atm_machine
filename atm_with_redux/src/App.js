import React from "react";
import "./styles.css";
import { BrowserRouter , Route , Link , Switch} from "react-router-dom";
import "./App.css"
import Deposite from "./components/Deposite";
import Withdraw from "./components/Withdraw";

export default function App() {
  return (
    <div>
    <div className="App">
      <BrowserRouter> 
      <div className="router-menu">
      <div> <h2>Hello ATM</h2></div>
      <h5>Welcome to universal atm machine with redux</h5>
      <Link to="/"  className="deposite-router">Deposite</Link>
      <Link to="/withdraw"  className="withdraw-router">Withdraw</Link>
      </div>
      <Switch>
        <Route exact path="/"  component={Deposite}><Deposite/></Route>
        <Route exact path="/withdraw" component={Withdraw}><Withdraw/></Route>
      </Switch>
      </BrowserRouter>

    </div>
    </div>
  );
}
