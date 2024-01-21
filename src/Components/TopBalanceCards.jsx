import BalanceCard from "./BalanceCard";

const TopBalanceCards=()=>{
    return (
        <>
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between",width:"60vw",height:"15vh"}}>
        <h3 style={{textDecoration:"underline"}}>Top 3 Balances</h3>
        <div style={{display:"flex",justifyContent:"space-evenly",width:"60vw"}}>
        <BalanceCard accountName = "Costco" balance = {4000} date ={"1/5/2025"}/>
        <BalanceCard accountName = "Best Buy" balance = {2500} date ={"6/29/2023"}/>
        <BalanceCard accountName = "Target" balance = {500} date ={"10/9/2024"}/>
        </div>
        </div>
        </>
    )
}
export default TopBalanceCards;