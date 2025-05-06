import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import user from "../data/user";

// pass this data down as props to the child component(s) that need it!

// console.log(user.name);
// console.logA(user.city)

function App() {
  return (
    <div>
      <NavBar />
      <Home name = {user.name} color = {user.color} city = {user.city}/>
      
      <About  bio = {user.bio} github={user.links.github}
        linkedn={user.links.linkedin}    />

    </div>
  );
}

export default App;
