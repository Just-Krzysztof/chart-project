import SimpleLineChart from './pages/SimpleLineChart/SimpleLineChart'
import BrushBarChart from "./pages/BrushBarChart/BrushBarChart";
import CpuUsedChart from './pages/CpuUsedChart/CpuUsedChart';
import './App.css'

function App() {

  return (
    <>
      <SimpleLineChart></SimpleLineChart>
      <BrushBarChart></BrushBarChart>
      <CpuUsedChart></CpuUsedChart>
    </>
  );
}

export default App
