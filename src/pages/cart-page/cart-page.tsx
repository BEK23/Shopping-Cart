import RightIcon from "@assets/right-icon.svg";
import { Button } from "@nextui-org/react";
import { useState } from "react";

import { Title } from "@/components/title";
import { cn } from "@/lib/utils";
import { useCartStore } from "@/store/cart.store";

import { CardDetails } from "./components/card-details";
import { CartItems } from "./components/cart-items";
import { Header } from "./components/header";

export default function CartPage() {
  const [open, setOpen] = useState(false);

  const cartItems = useCartStore((state) => state.cartItems);

  return (
    <>
      <div className="relative flex h-full w-full justify-between lg:gap-unit-13">
        <div className="grow overflow-hidden">
          <Header />
          <div className="flex justify-between">
            <Title
              title="Shopping cart"
              subtitle={`You have ${cartItems.length} item in your cart`}
              className="pb-7"
            />
            <Button
              color="success"
              className="flex gap-1 text-white lg:hidden"
              onClick={() => setOpen(true)}
            >
              Continue
              <img src={RightIcon} alt="continue" />
            </Button>
          </div>
          <CartItems />
        </div>
        <div
          className={cn(
            "z-30 absolute right-0 translate-x-full transition-all opacity-0 overflow-auto rounded-large duration-700 lg:static lg:translate-x-0 lg:opacity-100",
            open &&
              "opacity-100 translate-x-8 shadow-[-7px_5px_15px_7px_#00000025]",
          )}
        >
          <CardDetails />
        </div>
      </div>
      <div
        className={cn(
          "absolute left-0 top-0 z-20 h-dvh w-full translate-x-full duration-0",
          open && "translate-x-0",
        )}
      >
        <div
          className={cn(
            "w-full h-full bg-black opacity-0 transition-opacity duration-700",
            open && "opacity-70",
          )}
        ></div>
      </div>
    </>
  );
}
