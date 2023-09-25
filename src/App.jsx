import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ProcessVote from "./pages/PaymentPage";
import PaymentPage from "./pages/PaymentPage";
import CandidateList from "./components/CandidateList";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CandidateList />} />
        <Route path="/payment/:id" element={<PaymentPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
