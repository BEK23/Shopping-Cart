import { Title } from "@/components/title";
import { useCartStore } from "@/store/cart.store";

import { CardDetails } from "./components/card-details";
import { CartItems } from "./components/cart-items";
import { Header } from "./components/header";

export default function CartPage() {
  const cartItems = useCartStore((state) => state.cartItems);

  return (
    <div className="flex h-full w-full justify-between gap-unit-13">
      <div className="grow">
        <Header />
        <Title
          title="Shopping cart"
          subtitle={`You have ${cartItems.length} item in your cart`}
          className="pb-7"
        />
        <CartItems />
      </div>
      <CardDetails />
    </div>
  );
}
