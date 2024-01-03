import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import CreateProduct from "./CreateProduct";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";
import Edit from "./Edit";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<CreateProduct></CreateProduct>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/edit/product/:id" element={<Edit></Edit>}></Route>
      </Routes>
    </>
  );
}

export default App;
