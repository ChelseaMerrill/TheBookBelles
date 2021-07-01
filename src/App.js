import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Homepage from "./Components/Homepage/homepage";
import Navigation from './Components/NavBar/navbar.components';
import MeetTheBelles from "./Components/Meet_The_Belles/meet";
import BookOfTheMonth from "./Components/Book_Of_The_Month/bookofthemonth";
import Recommendation from './Components/Recommendations/recommendations.components';
import GiveARec from "./Components/Give_A_Recommendation/givearec";
import Jumbotron from "./Components/Jumbotron/jumbotron";


import './App.css';

function App() {
  return (
    <Router>
      <div>
        <div>
          <Jumbotron/>
          <Navigation/>
        </div>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/meet" component={MeetTheBelles} />
          <Route exact path="/bookofthemonth" component={BookOfTheMonth} />
          <Route exact path="/recommendation" component={Recommendation} />
          <Route exact path="/givearec" component={GiveARec} />
        </Switch>

      </div>
          {/* <Footer/> */}
    </Router>
  );
}

export default App;
