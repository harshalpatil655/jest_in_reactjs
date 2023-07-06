import React from "react";
import { Router } from "react-router-dom";
import Home from "./Home";

const AllRoutes = () => {
  return (
    <Router>
      <Router path="/" element={<Home />} />
    </Router>
  );
};

export default AllRoutes;
