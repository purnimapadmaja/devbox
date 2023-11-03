import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";

import Products from "./Components/Products";
import LoginForm from "./Components/LoginForm";
import Navbars from "./Components/Navbars";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navbars />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/loginForm" elemets={<LoginForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
