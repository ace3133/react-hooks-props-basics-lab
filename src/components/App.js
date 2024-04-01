import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Links from "./Links";
import user from "../data/user";

function App() {
  const { name, city, color, bio, links } = user;
  const { github, linkedin } = links;

  return (
    <div>
      <NavBar />
      {/* Pass the name, city, and color props to the Home component */}
      <Home name={name} city={city} color={color} />
      <About bio={bio} github={github} linkedin={linkedin} />
    </div>
  );
}

export default App;
