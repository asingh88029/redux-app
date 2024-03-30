import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux"
import store from "./redux/store";

import Home from "./screen/Home";
import Sigin from "./screen/Sigin";
import Signup from "./screen/Signup";
import Navbar from "./component/Navbar";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signin" element={<Sigin/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
