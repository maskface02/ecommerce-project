import { useEffect, useState } from "react";
import { Header } from "../../../components/Header";
import "./OrdersPage.css";
import axios from "axios";
import { OrderDetailsGrid } from "./OrderDetailsGrid";
import { OrderHeaderRightSection } from "./OrderHeaderRightSection";
import { OrderHeaderLeftSection } from "./OrderHeaderLeftSection";

export function OrdersPage({ cart }) {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios.get("/api/orders?expand=products").then((response) => {
      setOrders(response.data);
    });
  }, []);
  return (
    <>
      <title>Orders</title>

      <Header cart={cart} />
      <div class="orders-page">
        <div class="page-title">Your Orders</div>

        <div class="orders-grid">
          {orders.map((order) => {
            return (
              <div key={order.id} class="order-container">
                <div class="order-header">
                  <OrderHeaderLeftSection order={order} />
                  <OrderHeaderRightSection order={order} />
                </div>
                <OrderDetailsGrid order={order} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
