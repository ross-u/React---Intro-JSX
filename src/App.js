import React, { Component } from "react";
import "./App.css";

const user = {
  firstName: 'Harper',
  lastName: 'Perez',
  avatarUrl: 'https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-128.png'
};
    
const element = <h2>Hello, {formatName(user)} </h2>;

const formatName = (user) => {
  return `${user.firstName} ${user.lastName}`;
}

const displayAvartar = (userObj) => {
  if(userObj.avatarUrl){
    return <img src={userObj.avatarUrl} />
  } 
  else {
    return <img src='https://s3.amazonaws.com/owler-image/logo/ironhack_owler_20180828_221413_original.png' width='300' height='300'/>
  }
}
 

// React class Component
class App extends Component {

  render() {
    return (
      <div className="App">
        <h1> Hello Ironhackers! </h1>

        {element}

        { displayAvartar(user) }
        
      </div>
    );
  }
}

export default App;