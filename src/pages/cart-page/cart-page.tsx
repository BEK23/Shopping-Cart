import { Title } from "@/components/title";

import { CardDetails } from "./components/card-details";
import { CartItems } from "./components/cart-items";
import { Header } from "./components/header";

export default function CartPage() {
  return (
    <div className="flex h-full w-full justify-between gap-unit-13">
      <div className="grow">
        <Header />
        <Title
          title="Shopping cart"
          subtitle="You have 3 item in your cart"
          className="pb-7"
        />
        <CartItems />
      </div>
      <CardDetails />
    </div>
  );
}
