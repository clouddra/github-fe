import * as React from "react";
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {UserSearch} from "./UserSearch";
import {Projects} from "./Projects";
import {Readme} from "./Readme";


class App extends React.Component<{}, {}> {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={UserSearch}/>
          <Route path="/repos/:user" exact render={({match}) => {
            return <Projects user={match.params.user}/>
          }}/>
          <Route path="/repos/:user/:repo/readme" exact render={({match}) => {
            return <Readme user={match.params.user} repo={match.params.repo}/>
          }}/>
        </div>
      </Router>
    );
  }
}

export default App;
