import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProcessVote from "./pages/PaymentPage";
import PaymentPage from "./pages/PaymentPage";
import CandidateList from "./components/CandidateList";
import "./App.css";
import Error from "./pages/Error";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProcessVote />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/list" element={<CandidateList />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
