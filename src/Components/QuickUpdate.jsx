import { useState } from "react"
import AccountForm from './AccountForm'

const QuickUpdate = ()=>{
    const[quickAdd, setQuickAdd] =useState();

    const generateAddForm = ()=>{
        return (
            <div>
                <AccountForm/>
                <button className="btn" style={{backgroundColor:"red"}} onClick={()=>(setQuickAdd(false))}>Cancel</button>
            </div>
        )
    }
    const addPrompt = ()=>{
        return(
            <>
        <h2>Quick Add</h2> 
        <i>*Add an account here</i>
        <button className="btn" onClick={()=>{setQuickAdd(true)}}>Update</button>
        </>
        )
    }
    return(
     <div className="quick-update-card">
     {!quickAdd?addPrompt():generateAddForm()}
    
     </div>
    )
}
export default QuickUpdate;