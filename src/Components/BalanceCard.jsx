
const BalanceCard = (props)=>{
    return (
        <div className="balance-card">
        <section>
            <h1>{props.accountName}</h1>
            <hr/>
            <h2 style={{paddingTop:20}}>${props.balance}</h2>
            <p>Due: {props.date}</p>
        </section>
    
        </div>
    )
}
export default BalanceCard;