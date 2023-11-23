import React from "react";
import {
  PieChart,
  CartesianGrid,
   XAxis,
   YAxis,
   Bar,
   Tooltip,
   Legend,
   Pie,
   Cell,
   Label,
 } from "recharts";

 const data01 = [
    {
      "name": "Group A",
      "value": 400
    },
    {
      "name": "Group B",
      "value": 300
    },
    {
      "name": "Group C",
      "value": 300
    },
    {
      "name": "Group D",
      "value": 200
    },
    {
      "name": "Group E",
      "value": 278
    },
    {
      "name": "Group F",
      "value": 189
    }
  ];
  const data02 = [
    {
      "name": "Group A",
      "value": 2400
    },
    {
      "name": "Group B",
      "value": 4567
    },
    {
      "name": "Group C",
      "value": 1398
    },
    {
      "name": "Group D",
      "value": 9800
    },
    {
      "name": "Group E",
      "value": 3908
    },
    {
      "name": "Group F",
      "value": 4800
    }
  ];
    
  const App = () => {
    return (
      <div style={{ maxHeight: '200px', overflow: 'hidden', margin: 'auto' }}>
      <PieChart width={500} height={250}>
     <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
     <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
     </PieChart>
     </div> 
    );
  }

  export default App;