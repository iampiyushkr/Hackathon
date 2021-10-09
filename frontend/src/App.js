<<<<<<< HEAD
import StudentProfile from "./Components/Profile/student";

import Carrier from "./Components/Profile/carrierPage";
import Mentor from "./Components/Profile/mentorDetail";



function App() {
  return (
    <div >
        <StudentProfile/> 
         <Carrier/>
        <Mentor/>
=======
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
>>>>>>> 7f3fb8618856d1fe34d45a6a725421b0038c9cdf
    </div>
  );
}

export default App;