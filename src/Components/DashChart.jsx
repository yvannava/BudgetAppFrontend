import { BarChart } from "@mui/x-charts";


const DashChart=()=>{
    return(
        <>
        <div className="dash-chart-container">
        <BarChart xAxis={[
    {
      id: 'barCategories',
      data: ['Jan', 'Feb', 'Mar'],
      scaleType: 'band',
    },
  ]}
  series={[
    {
      data: [2000, 5000, 3000],
    },
  ]}
  width={800}
  height={300}/>
  </div>
        </>
    )
}
export default DashChart;