import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screen/Home";
import Sigin from "./screen/Sigin";
import Signup from "./screen/Signup";
import Navbar from "./component/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signin" element={<Sigin/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
