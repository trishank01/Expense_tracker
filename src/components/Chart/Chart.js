import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)
  console.log(dataPointValues)
  const totalMaximum  = Math.max(...dataPointValues)
  console.log(totalMaximum)
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoints) => (
        <ChartBar 
         key={dataPoints.label}
         value={dataPoints.value}
         maxValue={totalMaximum} 
         label={dataPoints.label}
         />
      ))}
    </div>
  );
};

export default Chart;
