import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Homepage from "./Components/Homepage/homepage";


import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
