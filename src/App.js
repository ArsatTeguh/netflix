import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import HalamanHome from "./Component/HalamanHome";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HalamanHome />}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
