import "./App.css";
import Header from "./components/shared/header/header";
import Footer from "./components/shared/footer/footer";
import Home from "./pages/home";
import Cadastro from "./pages/cadastro";
import View from "./pages/view";
import Edit from "./pages/edit";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Cadastro />} />
        <Route path="/view/:id" element={<View />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
