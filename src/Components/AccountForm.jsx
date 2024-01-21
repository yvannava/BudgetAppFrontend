import { useState } from "react";
import { PostRequest } from "../ApiRequest";
import AllAccounts from "./AllAccounts";

const AccountForm = () => {
    const [accountName,setAccountName] = useState("");
    const[balance,setBalance] =useState("");
    const[date,setDate]=useState();
    const[loadData,setLoadData] =useState(false)
    const api = 'http://localhost:8080/Api/v1/Account';

    const resetFields = ()=>{
        setAccountName("");
        setBalance("");
        setDate("")
    }
  const handleSubmit = (e) => {
    e.preventDefault();
    const postData ={
        accountName : accountName,
        balance : balance,
        date : date
    };
    PostRequest(api,postData)
    console.log("successfully")
    setLoadData(!loadData)
    resetFields();
  
  };
  
  return (
    <div style={{display:"flex"}}>
    <div className="form-container">
        <h4>Use this form to add a new Account.</h4>
        <hr></hr>
          <form className="form" onSubmit={handleSubmit}>
            <div className="col">
            <label>Account Name</label>
            <input className="input-field" placeholder="Account" type="text" value={accountName} onChange={(e)=>{setAccountName(e.target.value)}}/>
            </div>
            <div className="col">
            <label>Balance</label>
            <input className="input-field" type="text" placeholder="00.00" value={balance} onChange={(e)=>{setBalance(e.target.value)}}/>
            </div>
            <div className="col">
            <label>Due Date</label>
            <input className="input-field" type="date" placeholder="Date" value={date} onChange={(e)=>{setDate(e.target.value)}}/>
            </div>
            <button type="submit" className="btn">
              Add
            </button>
          </form>
   </div>
    {/* <AllAccounts loadData ={loadData}/> */}
 </div>
  );
};

export default AccountForm;
