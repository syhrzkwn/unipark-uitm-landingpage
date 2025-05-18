import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import HowToUse from "./pages/HowToUse";
import Limitation from "./pages/Limitation";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/how-to-use" element={<HowToUse />}></Route>
        <Route path="/limitation" element={<Limitation />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
