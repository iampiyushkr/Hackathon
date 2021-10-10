
import './App.css';

import { TempNav } from "./Components/Temp/TempNav"
import Routes from "./Routes/Routes";


function App() {
  return (
    <div className="App">
      {/* <Routes /> */}
      <TempNav />
      <div
        style={{
          width: "100%",
          display: "flex",
          backgroundColor: "rgb(245,247,250)",
          flexDirection: "column",
        }}
      >
        <Routes />
      </div>
    </div>
  );
}

export default App;
