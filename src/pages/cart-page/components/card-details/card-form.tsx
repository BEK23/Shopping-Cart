import RightIcon from "@assets/right-icon.svg";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Divider } from "@nextui-org/react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

import { useCartStore } from "@/store/cart.store";
import { billingSchema, IBilling } from "@/types/billing.interface";

import { BillingFormFields } from "./form-fields";
import { PriceDetails } from "./price-details";

type CardFormProps = {
  disabled?: boolean;
};

export const CardForm = ({ disabled }: CardFormProps) => {
  const form = useForm<IBilling>({
    resolver: zodResolver(billingSchema),
  });

  const shippingPrice = useCartStore((state) => state.shipping);
  const subtotal = useCartStore((state) => state.subtotal);

  const onSubmit: SubmitHandler<IBilling> = (data) => {
    console.log("Data: ", data);
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex grow flex-col justify-between gap-2.5"
      >
        <BillingFormFields disabled={disabled} />

        <Divider className="mb-1 mt-2 bg-[#5f65c3]" />

        <PriceDetails />

        <Button
          type="submit"
          disabled={disabled}
          disableAnimation={disabled}
          disableRipple={disabled}
          color="success"
          className="flex h-14 justify-between py-0.5 text-base text-white"
        >
          ${subtotal ? subtotal + shippingPrice : 0}
          <div className="flex items-center gap-1">
            Checkout <img src={RightIcon} alt="right" />
          </div>
        </Button>
      </form>
    </FormProvider>
  );
};
