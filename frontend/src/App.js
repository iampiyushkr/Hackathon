import './App.css';
import { Routes } from './Routes/Routes';
import { TempNav } from "./Components/Temp/TempNav"

function App() {
  return (
    <div className="App">
      <TempNav />
      <Routes/>
    </div>
  );
}

export default App;