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


import { useEffect, useState } from "react";

function App() {
  const [person, setPerson] = useState({})
  const [planet, setPlanet] = useState({})

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    fetch("https://swapi.tech/api/people/1", {
      signal
    })
      .then((res) => res.json())
      .then((data) => {
        setPerson(data.result.properties);
      })
      .catch((err) => {
        console.error("Get Person Error: ", err);
      });

    return () => controller.abort();
  }, []);

  function phoneHome() {
    fetch(person.homeworld)
      .then((resolve) => resolve.json())
      .then((data) => {setPlanet(data.result.properties)})

  }

  return (
    <div className="App">
      <div className="person">
        <h1>
          Name: {person.name || "Not Found"}
        </h1>
        <div>
        <button onClick={phoneHome}>Phone Home</button>
        </div>
        <h1>
          Planet: {planet.name}
        </h1>

        <h1>
          Gender: {person.gender}
        </h1>
        <h1>
          Height: {person.height}
        </h1>
        <h1>
          Skin Color: {person.skin_color}
        </h1>
        <h1>
          Eye Color: {person.eye_color}
        </h1>
        </div>
    </div>
  );
}

export default App;
