import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Cesta } from "./cesta";
import { KittiesPage } from "./kitties";
import { PuppiesPage } from "./puppies";

export const Layout: React.FC = () => (
  <>
    <div className="layout">
      <div>
        <Router>
          <div className="links">
            <Link to={"/"}>Kitties</Link> &nbsp;
            <Link to={"/puppies"}>Puppies</Link>
          </div>
          <div className="articles">
          <Routes>
            <Route path="/" element={<KittiesPage />} />
            <Route path="/puppies" element={<PuppiesPage />} />
          </Routes>
          </div>
        </Router>
      </div>
      <div>
        <Cesta />
      </div>
    </div>
  </>
);
