import { useCartStore } from "@/store/cart.store";

import { CartItem } from "./cart-item";

export const CartItems = () => {
  const cartItems = useCartStore((state) => state.cartItems);

  return (
    <div className="no-scrollbar h-full space-y-6 overflow-auto">
      {cartItems.length > 0 ? (
        cartItems.map((item) => <CartItem key={item.id} item={item} />)
      ) : (
        <div className="my-36 text-center text-3xl font-medium">
          Cart is empty
          <br />
          <br />
          (* ￣︿￣)
        </div>
      )}
    </div>
  );
};
