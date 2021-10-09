
import './App.css';
import { Routes } from './Routes/Routes';
import { TempNav } from "./Components/Temp/TempNav"

function App() {
  return (
    <div className="App">
      <TempNav />
      <div style={{width:"100%", display:"flex", backgroundColor:"rgb(245,247,250)"}}>
      <Routes/>
      </div>
    </div>
  );
}

export default App;