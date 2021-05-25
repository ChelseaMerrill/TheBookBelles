import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Homepage from './Components/Homepage/homepage.components';
import Navigation from './Components/NavBar/navbar.components';
import MeetTheBelles from './Components/Meet_The_Belles/meet.components';
import BookOfTheMonth from './Components/Book_Of_The_Month/bookofthemonth.components';
import Recommendation from './Components/Recommendations/recommendations.components';
import GiveARec from './Components/Give_A_Recommendation/givearec.components';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <div>
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
