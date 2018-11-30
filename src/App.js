import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Accounts from './Components/Accounts';
import Header_top from './Components/header';
import Transactions from './Components/Transactions';
import New_account from './Components/new_account'
class App extends Component {
  render() {
    return (
      <div className="App">

<Header_top/>

 {/* <Accounts/>
<Transactions/>  */}
 <New_account/> 


       
      </div>
    );
  }
}

export default App;
