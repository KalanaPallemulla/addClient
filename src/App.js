import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import SingleAdd from "./pages/SingleAdd";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/singleAdd" component={SingleAdd} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
