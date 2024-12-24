import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import WeatherPage from "./pages/WeatherPage.tsx";
import CreatePage from "./pages/CreatePage.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:id" element={<WeatherPage />}/>
        <Route path="/create" element={<CreatePage/>}/>

        <Route path="/*" element={<HomePage />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
