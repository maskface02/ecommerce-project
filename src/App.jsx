import "./App.css";
import axios from "axios";
import { HomePage } from "./pages/home/HomePage";
import { CheckoutPage } from "./pages/home/checkout/CheckoutPage";
import { OrdersPage } from "./pages/home/orders/OrdersPage";
import { Routes, Route } from "react-router";
import { useEffect, useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    axios.get("/api/cart-items?expand=product").then((response) => {
      setCart(response.data);
    });
  }, []);
  return (
    <Routes>
      <Route index element={<HomePage cart={cart} />} />
      <Route path="checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="orders" element={<OrdersPage cart={cart} />} />
    </Routes>
  );
}

export default App;
