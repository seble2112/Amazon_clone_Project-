import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import SignUp from "./Pages/Auth/SignUp"; // ✅ fixed
import Payment from "./Pages/Payment/Payment";
import Cart from "./Pages/Cart/Cart";
import Orders from "./Pages/Orders/Orders";
import Results from "./Pages/Results/Results";
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/auth" element={<SignUp />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/category/:categoryName" element={<Results />} />
    </Routes>
  );
};

export default Routing;
