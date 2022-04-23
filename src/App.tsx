import { useEffect, useRef } from "react";
import * as echarts from "echarts";
import "./App.css";

function App() {
  const options = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
      }
    ]
  };
  const chartRef = useRef<HTMLDivElement>(null);
  let chart: echarts.ECharts | null = null;
  
  useEffect(() => {
    if (!chart) {
      chart = echarts.init(chartRef.current as HTMLDivElement);
    }
    chart.setOption(options);
  }, [options]);

  return (
    <div className="App">
      <h1>React Echarts Demo</h1>
      <div
        ref={chartRef}
        className="chart"
      ></div>
    </div>
  );
}

export default App;
