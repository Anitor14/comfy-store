import React from "react";

const CartColumns = () => {
  return (
    <div className="hidden sm:block">
      <div className="md:grid md:grid-cols-[316px,1fr,1fr,auto]">
        <h5>item</h5>
        <h5>price</h5>
        <h5>quantity</h5>
        <h5>subtotal</h5>
        <span></span>
      </div>
      <hr />
    </div>
  );
};
