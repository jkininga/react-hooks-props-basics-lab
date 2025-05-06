import React from "react";
import Links from "./Links.js"
import user from "../data/user";

function About({linkedn, github, bio}) {
  if(!bio || bio==='') {
    return null;
  } else
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links github={github} linkedn={linkedn} />
    </div>
  );
}






export default About;
