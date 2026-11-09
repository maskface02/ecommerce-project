import dayjs from "dayjs";
import { formatMoney } from "../../../utils/money";

export function OrderHeaderLeftSection({ order }) {
  return (
    <div class="order-header-left-section">
      <div class="order-date">
        <div class="order-header-label">Order Placed:</div>
        <div>{dayjs(order.orderTimeMs).format("MMMM D")}</div>
      </div>
      <div class="order-total">
        <div class="order-header-label">Total:</div>
        <div>{formatMoney(order.totalCostCents)}</div>
      </div>
    </div>
  );
}
