import React, { useState, createContext } from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/pages/home';
import Staking from './components/pages/staking';

export const CarContext = createContext(null);

function App() {

  return (
    <CarContext.Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="staking" element={<Staking />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CarContext.Provider>
  );
}

export default App;
