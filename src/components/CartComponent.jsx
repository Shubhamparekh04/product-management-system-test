import React from "react";

const CartComponent = ({ cart, removeFromCart, updateQty }) => {
  const total = cart.reduce(
    (acc, item) => acc + item.qty * parseFloat(item.price || 0),
    0
  );

  return (
    <div className="card shadow-sm">
      <div className="card-header bg-primary text-white">
        <h5 className="mb-0">🛒 My Cart ({cart.length})</h5>
      </div>
      <ul className="list-group list-group-flush">
        {cart.length === 0 && (
          <li className="list-group-item text-center text-muted">
            Your cart is empty.
          </li>
        )}
        {cart.map((item) => (
          <li
            className="list-group-item d-flex justify-content-between align-items-start"
            key={item.id}
          >
            <div className="flex-grow-1">
              <strong>{item.pName}</strong>
              <br />
              ₹{item.price} × {item.qty}
            </div>
            <div className="d-flex align-items-center">
              <button
                className="btn btn-sm btn-outline-secondary me-1"
                onClick={() => updateQty(item.id, item.qty - 1)}
                disabled={item.qty <= 1}
              >
                −
              </button>
              <span className="px-2">{item.qty}</span>
              <button
                className="btn btn-sm btn-outline-secondary ms-1"
                onClick={() => updateQty(item.id, item.qty + 1)}
              >
                +
              </button>
              <button
                className="btn btn-sm btn-danger ms-3"
                onClick={() => removeFromCart(item.id)}
              >
                ❌
              </button>
            </div>
          </li>
        ))}
      </ul>
      {cart.length > 0 && (
        <div className="card-footer text-end fw-bold fs-5">
          Total: ₹{total.toFixed(2)}
        </div>
      )}
    </div>
  );
};

export default CartComponent;
