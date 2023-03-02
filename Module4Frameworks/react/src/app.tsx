import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "./scenes/login";
import { ListPage } from "./scenes/list";
import { DetailPage } from "./scenes/detail";
import { MyUserProvider } from "./core/provider";
import { RickMorty } from "./scenes/rickMorty";
import { RickMortyDetail } from "./scenes/rickMortyDetail";

export const App = () => {
  return (
    <MyUserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/rickmorty" element={<RickMorty />} />
          <Route path="/rickmortydetail/:id" element={<RickMortyDetail />} />
        </Routes>
      </Router>
    </MyUserProvider>
  );
};
