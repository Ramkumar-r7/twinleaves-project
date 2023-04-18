import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import ProductDashboard from "./Components/productDashboard/productDashboard";
import ProductDetails from "./Components/ProductDetails/productDetails";
const App = () => {
  const location = useLocation();
  let param = location.pathname;

  return (
    <div>
      <Routes>
        <Route path="/" element={<ProductDashboard />} exact />
        <Route path="/:mrp" element={<ProductDetails />} />
      </Routes>
    </div>
  );
};

export default App;
