import { useState } from "react"

const DebtAmount = ()=>{
    const [hideAmount,showAmount] = useState()
    const toggleDashboardAmount = ()=>{
        return(
        <>
        <h3>Total Debt:</h3>
        <p style={{color:"red",fontSize:60,fontWeight:700}}>$23,555.88</p>
        </>
        )
    }

    const showIncome = ()=>{
        return(
            <>
            <h3>Your Income:</h3>
            <p style={{color:"#008954",fontSize:60,fontWeight:700}}>$5,250.60</p>
            </>
            )
    }
    return(
        <>
        <div className="dash-amount-container">
        {hideAmount ? toggleDashboardAmount() : showIncome()}
        <div className="dash-amount-btn-group">
        <button className="btn" style={{backgroundColor:"red"}} onClick={()=>{showAmount(true)}}>Debt</button>
        <button className="btn" style={{backgroundColor:"#008954"}} onClick={()=>{showAmount(false)}}>Income</button>
        </div>
        </div>
        </>
    )
}
export default DebtAmount;