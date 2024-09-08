/* eslint-disable react/prop-types */
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

// const data = [
//   { day: 1, weight: 54.5 },
//   { day: 2, weight: 54.6 },
//   { day: 7, weight: 54.8 },
//   { day: 8, weight: 55.0 },
//   { day: 9, weight: 55.2 },
//   { day: 10, weight: 55.4 },
//   { day: 11, weight: 55.6 },
//   { day: 12, weight: 55.8 },
//   { day: 1, weight: 54.5 },
//   { day: 2, weight: 54.6 },
//   { day: 7, weight: 54.8 },
//   { day: 8, weight: 55.0 },
//   { day: 9, weight: 65.2 },
//   { day: 10, weight: 55.4 },
//   { day: 11, weight: 55.6 },
//   { day: 12, weight: 55.8 },
// ];

function WeightGraphData({data}) {
  const chartWidth = data.length * 40; // Dynamically set width based on the number of data points

  return (
    <div style={{ display: "flex", width: "100%", alignItems: "center" }}>
      {/* Scrollable chart */}
      <div style={{ width: "100%", overflowX: "auto" }}>
        <div style={{ width: `${chartWidth}px` }}>
          <LineChart
            width={chartWidth}
            height={400}
            data={data}
            margin={{ top: 30, right: 30, left: 5, bottom: 50 }}
          >
            <CartesianGrid stroke="#ebebeb" strokeDasharray="3 3" />
            <XAxis
              dataKey="day"
              tick={{ fontSize: 14, fill: "#a6a6a6" }} // Light gray color for X-axis ticks
              tickLine={false} // Remove the small tick line
              axisLine={{ stroke: "#a6a6a6" }} // Add a visible axis line
              label={{ value: 'Day', position: 'insideBottomLeft', offset: -10, fontSize: 16 }} // Add X-axis label
            />
            <YAxis
              tick={{ fontSize: 14, fill: "#a6a6a6" }} // Light gray color for Y-axis ticks
              tickLine={false} // Remove the small tick line
              axisLine={{ stroke: "#a6a6a6" }} // Add a visible axis line
              label={{ value: 'Weight', angle: -90, position: 'left', offset: -15, fontSize: 16 }} // Add Y-axis label
            />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="weight"
              stroke="#8884d8"
              strokeWidth={2}
              dot={{ stroke: '#8884d8', strokeWidth: 2, r: 4 }} // Add dots on the line
            />
          </LineChart>
        </div>
      </div>
    </div>
  );
}

export default WeightGraphData;
