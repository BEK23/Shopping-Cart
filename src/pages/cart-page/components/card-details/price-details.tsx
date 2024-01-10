import { useEffect, useMemo } from "react";

import { useCartStore } from "@/store/cart.store";

export const PriceDetails = () => {
  const cartItems = useCartStore((state) => state.cartItems);
  const shippingPrice = useCartStore((state) => state.shipping);

  const setSubtotal = useCartStore((state) => state.setSubtotal);

  const subtotal = useMemo(
    () => cartItems.reduce((total, item) => total + item.price * item.count, 0),
    [cartItems],
  );

  useEffect(() => {
    setSubtotal(subtotal);
  }, [setSubtotal, subtotal]);

  return (
    <div className="mb-2 space-y-1.5 font-medium">
      <div className="flex justify-between">
        <div>Subtotal</div>
        <div>${subtotal}</div>
      </div>
      <div className="flex justify-between">
        <div>Shipping</div>
        <div>${shippingPrice}</div>
      </div>
      <div className="flex justify-between">
        <div>Total (Tax incl.)</div>
        <div>${subtotal + shippingPrice}</div>
      </div>
    </div>
  );
};
