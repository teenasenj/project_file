import React from "react";

class ClassName_component extends React.Component {
    render() {
    const style = {
      color: "white",
      align_right:"center",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial"
    }; 
      return (
      <><h2 style={style}>Hi, Hello !</h2>
      <h2>Hi, Hello!</h2>
      </>);
    }
  }
  
  export default ClassName_component;
