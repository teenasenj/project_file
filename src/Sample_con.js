// import React from "react";
// class Sample_constructor extends React.Component
// {
//     constructor(){
//         super();
//         this.state ={color:"red"};
//     }
//  render(){
//         return<h2>iam a{this .state= color}</h2>;
//     }
// }
// export default Sample_con;


import React from 'react';


class Sample_con extends React.Component {
  constructor() {
    super();
    this.state = {color: "red"};
  };
  render() {
    return <h2>I am a {this.state.color} Car!</h2>;
  }
}

export default Sample_con;

              

              