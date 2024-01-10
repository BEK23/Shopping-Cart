import RightIcon from "@assets/right-icon.svg";
import { Button, Divider } from "@nextui-org/react";
import { FormProvider, useForm } from "react-hook-form";

import { BillingFormFields } from "@/pages/cart-page/components/card-details/form-fields";
import { PriceDetails } from "@/pages/cart-page/components/card-details/price-details";
import { useCartStore } from "@/store/cart.store";

type CardFormProps = {
  disabled?: boolean;
};

export const CardForm = ({ disabled }: CardFormProps) => {
  const from = useForm();

  const shippingPrice = useCartStore((state) => state.shipping);
  const subtotal = useCartStore((state) => state.subtotal);

  return (
    <FormProvider {...from}>
      <form className="flex grow flex-col justify-between gap-2.5">
        <BillingFormFields disabled={disabled} />

        <Divider className="mb-1 mt-2 bg-[#5f65c3]" />

        <PriceDetails />

        <Button
          disabled={disabled}
          disableAnimation={disabled}
          disableRipple={disabled}
          color="success"
          className="flex h-14 justify-between py-0.5 text-base text-white"
        >
          ${subtotal + shippingPrice}
          <div className="flex items-center gap-1">
            Checkout <img src={RightIcon} alt="right" />
          </div>
        </Button>
      </form>
    </FormProvider>
  );
};
