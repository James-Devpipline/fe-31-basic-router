import { useEffect, useState } from "react";

export default function Swapi() {
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
  );
}

