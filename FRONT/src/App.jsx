import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Boards from "./components/boards/Boards";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/board" element={<Boards />} />
        </Routes>
      </Router>
      <ToastContainer
        autoClose={3000}
        draggable={false}
        position="top-center"
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnHover
      />
    </>
  );
}

export default App;
