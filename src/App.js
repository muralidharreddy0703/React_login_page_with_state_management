import React, { Component} from 'react';
//import logo from './logo.svg';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';


class App extends Component {

  state = {
    userName : "Murali"
  }

  userNameChangeHandler = (event) => {
    this.setState({userName: event.target.value});
  }

  render(){

   
    return (
      <div className="App">
         <UserInput 
          changed={this.userNameChangeHandler} 
          currentName={this.state.userName}
          />
         <UserOutput userName={this.state.userName} />
         <UserOutput userName={this.state.userName}/>
         <UserOutput userName="Murali"/>
     
        
      </div>
    );

  }
  
}

export default App;
