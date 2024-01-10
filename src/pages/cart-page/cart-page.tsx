import RightIcon from "@assets/right-icon.svg";
import { Button, Modal, ModalContent, useDisclosure } from "@nextui-org/react";
import { useEffect } from "react";

import { Title } from "@/components/title";
import { cn } from "@/lib/utils";
import { useCartStore } from "@/store/cart.store";

import { CardDetails } from "./components/card-details";
import { CartItems } from "./components/cart-items";
import { Header } from "./components/header";

export default function CartPage() {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const cartItems = useCartStore((state) => state.cartItems);
  const subtotal = useCartStore((state) => state.subtotal);
  const cartItemsCount = cartItems.length;

  useEffect(() => {
    if (!cartItemsCount) onClose();
  }, [cartItemsCount, onClose]);

  return (
    <>
      <div className="relative flex h-full w-full justify-between lg:gap-unit-13">
        <div className="grow overflow-hidden">
          <Header />
          <div className="flex justify-between">
            <Title
              title="Shopping cart"
              subtitle={`You have ${
                cartItemsCount ? cartItemsCount : "no"
              } item${cartItemsCount !== 1 ? "s" : ""} in your cart`}
              className="pb-7"
            />
            <Button
              disabled={!subtotal}
              disableAnimation={!subtotal}
              disableRipple={!subtotal}
              color="success"
              className={cn(
                "flex gap-1 text-white lg:hidden transition-opacity",
                !subtotal && "opacity-0",
              )}
              onClick={onOpen}
            >
              Continue
              <img src={RightIcon} alt="continue" />
            </Button>
          </div>
          <CartItems />
        </div>
        <div
          className={cn(
            "z-30 absolute right-0 translate-x-full transition-all opacity-0 overflow-auto rounded-large duration-700",
            "lg:static lg:translate-x-0 lg:opacity-100",
          )}
        >
          <CardDetails />
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{ base: "max-w-fit !bg-transparent" }}
      >
        <ModalContent>
          <CardDetails />
        </ModalContent>
      </Modal>
    </>
  );
}
