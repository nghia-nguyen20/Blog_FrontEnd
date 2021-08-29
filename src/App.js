import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './components/Header';
import Home from './components/Home';
import Contact from './components/Contact';
import Product from './components/Product';
import News from './components/News';

function App() {
  return (
    <Router>
      <div className="App">
        test updating ...
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/contact">
            <Contact phone="01223445" name="tui" address="lam dong"/>
          </Route>
          <Route path="/product">
            <Product description="sp dep" />
          </Route>
          <Route path="/news">
            <News />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
