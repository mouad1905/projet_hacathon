import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/loginSignup";
import Navbar from "./components/navBar";
import Footer from "./components/footer";
import Colocations from "./pages/colocations";
import Revisions from "./pages/revisions";
import Entraide from "./pages/entraide";
import Profile from "./pages/profile";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/colocations" element={<Colocations />} />
        <Route path="/revisions" element={<Revisions />} />
        <Route path="/entraide" element={<Entraide />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
