import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Pattern from "./components/Pattern";
import Pricing from "./components/Pricing";
import Support from "./components/Support";
import UltrafitShop from "./components/Ultrafit_shop";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/Pattern">
          <Pattern />
        </Route>
        <Route path="/">
          <Pricing />
        </Route>
        <Route path="/Support">
          <Support />
        </Route>
        <Route path="/Ultrafit_shop">
          <UltrafitShop />
        </Route>
      </div>
    </Router>
  );
}

export default App;
