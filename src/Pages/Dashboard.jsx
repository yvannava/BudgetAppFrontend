
import AddAccountCard from "../Components/AddAccountCard";
import CustomerInfoCard from "../Components/CustomerInfoCard";
import DashChart from "../Components/DashChart";
import DebtAmount from "../Components/DebtAmount";
import Navbar from "../Components/Navbar";
import QuickUpdate from "../Components/QuickUpdate";
import TopBalanceCards from "../Components/TopBalanceCards";

const Dashboard = ()=>{
    return(
        <>
        <Navbar/>
        <div className="dash-grid">
            <DebtAmount/>
            <CustomerInfoCard/>
            <TopBalanceCards/>
            <DashChart/>
            <QuickUpdate/>
        </div>
        </>
    )
}
export default Dashboard;