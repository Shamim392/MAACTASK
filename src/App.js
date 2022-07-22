import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Login from "./components/Form/Login/Login";
import Registration from "./components/Form/Registration/Registration";
import Home from "./components/Home/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/footer" component={Footer} />
      </Switch>
    </Router>
  );
}

export default App;
