import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ManageStaff from "./pages/ManageStaff";
import "animate.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/managestaff" element={<ManageStaff />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
