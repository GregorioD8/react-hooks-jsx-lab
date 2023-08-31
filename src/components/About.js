import React from "react";
import { image } from "../data/data";

const divStyle = {
  background: "red"
 

}
function About() {
  return (
  <div id="about">
    <h2>
      About Me
    </h2>
    <p>
      my choosing
    </p>
    <img src={image} alt="I made this"></img>
  </div>
  )
}

export default About;
