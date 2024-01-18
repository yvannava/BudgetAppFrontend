import { useState,useEffect } from "react"
import { GetAllRequest } from "../ApiRequest";

const AllAccounts = ({loadData})=>{
const[requestData,setRequestData] =useState([]);
const newAccountRow = () => {
    return requestData.map((accountData) => (
      <tr key={accountData.id}>
        <td>{accountData.accountName}</td>
        <td>{accountData.balance}</td>
        <td>{accountData.date}</td>
      </tr>
    ));
  };

    useEffect((props) => {
        // Define the URL for your GET request
        const api = 'http://localhost:8080/Api/v1/Accounts';
        GetAllRequest(api,setRequestData)
        console.log(JSON.stringify(requestData))
      }, [loadData]);


    return(
        <>
           <div className="all-accounts-container">
    <table className="table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Balance</th>
      <th>Due Date</th>
    </tr>
  </thead>
  <tbody>
   {newAccountRow()}
  </tbody><i style={{color:"green"}}><b>* Refresh Screen to get new updated table for now!</b></i>
</table>

</div>
        </>
    )
}
export default AllAccounts;