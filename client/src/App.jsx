import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Home"
import AboutUs from "./components/AboutUs";
  
function App() {
  return (
    
      <Router>
        <div >
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
           <Route path ='/about' element={<AboutUs/>} />
        </Routes>
        </div>
      </Router>
    
  );
}
  
export default App;