import RightIcon from "@assets/right-icon.svg";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Divider, useDisclosure } from "@nextui-org/react";
import { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

import { SuccessModal } from "@/components/success-modal";
import { useCartStore } from "@/store/cart.store";
import { billingSchema, IBilling } from "@/types/billing.interface";

import { BillingFormFields } from "./form-fields";
import { PriceDetails } from "./price-details";

type CardFormProps = {
  disabled?: boolean;
};

export const CardForm = ({ disabled }: CardFormProps) => {
  const [loading, setLoading] = useState(false);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const form = useForm<IBilling>({
    resolver: zodResolver(billingSchema),
  });

  const shippingPrice = useCartStore((state) => state.shipping);
  const subtotal = useCartStore((state) => state.subtotal);

  const clearCart = useCartStore((state) => state.clear);

  const onSubmit: SubmitHandler<IBilling> = () => {
    setLoading(true);

    setTimeout(function () {
      setLoading(false);
      onOpen();
    }, 2000);
  };

  return (
    <>
      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex grow flex-col justify-between gap-2.5"
        >
          <BillingFormFields disabled={disabled} />

          <Divider className="mb-1 mt-2 bg-[#5f65c3]" />

          <PriceDetails />

          <Button
            isLoading={loading}
            type="submit"
            disabled={disabled}
            disableAnimation={disabled}
            disableRipple={disabled}
            color="success"
            className="flex h-14 justify-between py-0.5 text-base text-white"
          >
            ${subtotal ? subtotal + shippingPrice : 0}
            {!loading && (
              <div className="flex items-center gap-1">
                Checkout <img src={RightIcon} alt="right" />
              </div>
            )}
          </Button>
        </form>
      </FormProvider>
      <SuccessModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onClose={clearCart}
        title="Success"
        description="Your order has been successfully accepted! (●'◡'●)"
      />
    </>
  );
};
