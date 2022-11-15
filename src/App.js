import "./App.css";
import { Routes, Route } from "react-router-dom";
// import Navbar from "./component/navbar/Navbar";
// import Footer from './component/footer/Footer'
import Home from "./component/pages/Home";
import PlaceToStay from "./component/pages/PlaceToStay";
// import Modal from './component/Modal/Modal'

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <Routes>
        <Route path="/PlaceToStay" element={<PlaceToStay />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
