import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./component/pages/Home";
import PlaceToStay from "./component/pages/PlaceToStay";

function App() {
  return (
    <div>
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PlaceToStay" element={<PlaceToStay />} />
      </Routes>
    </div>
  );
}

export default App;
