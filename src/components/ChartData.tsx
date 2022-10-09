import React from "react";
import { BarChart, Bar } from "recharts";

interface chartdataProps {
  data: {}[];
}

const ChartData = ({ data }: chartdataProps) => {
  return (
    <div className="w-1/2 mt-5 ">
      <BarChart width={500} height={350} data={data}>
        <Bar dataKey="uv" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default ChartData;
