import { useCartStore } from "@/store/cart.store";

import { CartItem } from "./cart-item";

export const CartItems = () => {
  const cartItems = useCartStore((state) => state.cartItems);

  return (
    <div className="space-y-6">
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
};
