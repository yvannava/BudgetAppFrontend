
const AllAccounts = ()=>{

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
    <tr>
        <td>Costco</td>
        <td>$8000</td>
        <td>02/25/1992</td>
    </tr>
    <tr>
        <td>Best Buy</td>
        <td>$2400</td>
        <td>02/25/2001</td>
    </tr>
   
  </tbody>
</table>
</div>
        </>
    )
}
export default AllAccounts;