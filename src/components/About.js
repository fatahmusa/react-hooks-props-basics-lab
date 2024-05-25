import React from "react";
//import user from "../data/user";
import Links from "./Links"

function About(props) {
  if(!props.bio){
    return null;
  } else {
    
      return (
        <div id="about">
          <h2>About Me</h2>
          <p>I made this!</p>
          <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
          {/* add your <Links /> component here */}
          {props.bio}
          <Links github = "https://github.com/liza" linkedin ="https://www.linkedin.com/in/liza/"
    />
    
    </div>
    );
  }
}
export default About;
