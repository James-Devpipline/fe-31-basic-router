import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <NavLink exact to="/">
        Home
      </NavLink>

      <NavLink exact to="/Swapi">
        Swapi
      </NavLink>
    </div>
  );
} 
