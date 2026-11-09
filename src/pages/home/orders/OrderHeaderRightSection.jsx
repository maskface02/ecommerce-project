export function OrderHeaderRightSection({ order }) {
  return (
    <div class="order-header-right-section">
      <div class="order-header-label">Order ID:</div>
      <div>{order.id}</div>
    </div>
  );
}
