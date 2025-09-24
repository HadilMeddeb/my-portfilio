import "./App.css";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { darkTheme } from "./utils/themes";
import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs/Blogs";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
