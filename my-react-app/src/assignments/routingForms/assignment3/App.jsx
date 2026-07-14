import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <main className={styles.layout}>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="." replace />} />
      </Routes>
    </main>
  );
};

export default App;
