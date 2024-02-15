import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Gift from "./pages/Gift";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gift" element={<Gift />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
