import "./ContentComponent.css";
import React from "react";
import Options from './../ContentComponent/Options.png'
function template() {
  return (
    <div className="content-component">
      <h1 className="TitleContent">We HELP INNOVATIVE STARTUPS TO FIND AND FIX WEAK POINTS AND LOUNCH THE PRODUCT</h1>
      <h1 className="Subtitle">Spetial outstanding service for Startups</h1>
      <img src={Options} className="ImgContent"></img>
      <hr className="Line"></hr>
    </div>
  );
};

export default template;
