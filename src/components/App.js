/* 
Homework 4/11/2023 - Due tomorrow

Build a basic router where you can navigate to a "Swapi" component.
Your "Swapi" component should fetch some data from any person of
 your choosing. Render at least 3 data points on the dom.
It should also include a button that will fetch on click that person's home
planet information. Render the homeworld's name on the dom as well, but 
set it conditionally so that it doesn't display if it doesn't exist.

This should properly cleanup any asynchronous behavior when navigating away
from the component.

Try this with classes first, then refactor using hooks.

// for vscode
// npm i react-router-dom@5
// npm i --save-dev sass
*/

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Swapi from "./pages/Swapi"
import Home from "./pages/Home"
import Navbar from "./navigation/Navbar"



export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path="/swapi" component={Swapi}/>
          </Switch>
      </Router>
    </div>
  );
}

