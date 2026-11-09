import { Fragment } from "react";
import dayjs from "dayjs";


export function OrderDetailsGrid({order}) {
  return (
    <div class="order-details-grid">
      {order.products.map((orderProduct) => {
        return (
          <Fragment key={orderProduct.product.id}>
            <div class="product-image-container">
              <img src={orderProduct.product.image} />
            </div>

            <div class="product-details">
              <div class="product-name">{orderProduct.product.name}</div>
              <div class="product-delivery-date">
                Arriving on:{" "}
                {dayjs(orderProduct.estimatedDeliveryTimeMs).format("MMMM D")}
              </div>
              <div class="product-quantity">
                Quantity: {orderProduct.quantity}
              </div>
              <button class="buy-again-button button-primary">
                <img class="buy-again-icon" src="images/icons/buy-again.png" />
                <span class="buy-again-message">Add to Cart</span>
              </button>
            </div>

            <div class="product-actions">
              <a href="/tracking">
                <button class="track-package-button button-secondary">
                  Track package
                </button>
              </a>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
}
