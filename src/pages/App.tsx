import React from "react";
import { Route, Routes } from "react-router-dom";
import { router } from "../router";
import MainPage from "./main";

function App() {
  return (
    <Routes>
      <Route element={<MainPage />} path={router.main} />
    </Routes>
  );
}

export default App;
