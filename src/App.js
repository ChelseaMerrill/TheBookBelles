import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Dashboard from "./Components/Dashboard/dashboard";


import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
