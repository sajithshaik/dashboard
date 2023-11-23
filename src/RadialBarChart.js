import React from "react";
import { RadialBarChart, RadialBar, Legend, Tooltip, } from "recharts";

const data = [
    {
      "name": "",
      "uv": 31.47,
      "pv": 2400,
      "fill": "#8884d8"
    },
    {
      "name": "",
      "uv": 26.69,
      "pv": 4567,
      "fill": "#83a6ed"
    },
    {
      "name": "",
      "uv": -15.69,
      "pv": 1398,
      "fill": "#8dd1e1"
    },
    {
      "name": "",
      "uv": 8.22,
      "pv": 9800,
      "fill": "#82ca9d"
    },
    {
      "name": "",
      "uv": -8.63,
      "pv": 3908,
      "fill": "#a4de6c"
    },
    {
      "name": "",
      "uv": -2.63,
      "pv": 4800,
      "fill": "#d0ed57"
    },
    {
      "name": "",
      "uv": 6.67,
      "pv": 4800,
      "fill": "#ffc658"
    }
  ]
  
  const App = () => {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <RadialBarChart 
       width={630} 
       height={250} 
       innerRadius="10%" 
       outerRadius="80%" 
       data={data} 
       startAngle={180} 
       endAngle={0}
   >
  <RadialBar minAngle={15} label={{ fill: '#666', position: 'insideStart' }} background clockWise={true} dataKey='uv' />
  <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />
  <Tooltip />
 </RadialBarChart>
     </div> 
    );
  }

  export default App;

