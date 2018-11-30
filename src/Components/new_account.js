import React, { Component } from 'react';
import './acounts.css';



class New_account extends Component {
    state = {
        name:null,
        account_type:null,
        Amount:null
        
      };
      uploaddata =()=>{
      
       let  accounts = localStorage.getItem("Upload Account data");
        if(accounts!=null)
        {
          let new_accounts =  JSON.parse(accounts);
          console.log(new_accounts);

          
 let user_name =this.refs.name.value;

 let account_type =this.refs.account_type.value;
 let amount = this.refs.amount.value;

 this.state.name = user_name;
 this.state.account_type = account_type;
 this.state.Amount = amount;
 new_accounts.push(this.state);



 localStorage.setItem("Upload Account data",JSON.stringify(this.state));
 alert("Data has been stored");

        } 
        else{
          let new_accounts = [];
          console.log(new_accounts);
        }






// let user_name =this.refs.name.value;

// ;let account_type =this.refs.account_type.value;
// let amount = this.refs.amount.value;

// this.state.name = user_name;
// this.state.account_type = account_type;
// this.state.Amount = amount;
// new_accounts.push(this.state);



// localStorage.setItem("Upload Account data",JSON.stringify(this.state));
// alert("Data has been stored");


      };
  render() {
    return (
      <div className="new_accounts">
       
<h1 className="account_new_head">Enter Account Details Below </h1>
<hr/>
<form className="add_account" onSubmit={this.uploaddata} >
<label > Full Name </label>
<input type={"text"} ref="name" />
<br/>
<label > Account Type </label>
<select ref="account_type">
    <option>Select Account Type</option>
    <option>Current</option>
    <option>Saving</option>
    </select>
<br/>
<label > Initial Deposit </label>
<input type={"text"} value={"1000"} ref="amount"/>
<br/>
<input type={"submit"} Value={"Create Account"} />
<input type={"submit"} Value={"View All Accounts"}/>
</form>

      </div>
    );
  }
}

export default New_account;
