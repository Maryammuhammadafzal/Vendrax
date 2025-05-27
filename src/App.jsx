import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full h-full flex flex-col">
      <Header />
      <main className="h-full ">
        <Routes>
          <Route index element={<Home />} />
          {/* <Route path="/about" element={< />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about" element={<AboutPage />} /> */}
        </Routes>
      </main>

      <Footer/>
    </div>
  );
}

export default App;
