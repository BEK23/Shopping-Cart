import { Input, InputProps } from "@nextui-org/react";
import { useFormContext } from "react-hook-form";

import { IBilling } from "@/types/billing.interface";

type BillingFromFields = {
  disabled?: boolean;
};

export const BillingFormFields = ({ disabled }: BillingFromFields) => {
  const inputProps: InputProps = {
    labelPlacement: "outside",
    classNames: {
      input: "bg-transparent placeholder:text-[#c4c4c4] text-xs !text-white",
      innerWrapper: "bg-transparent",
      inputWrapper: [
        "bg-[#6268c6]",
        "data-[hover]:!bg-[#6268c6] data-[hover]:focus-within:!bg-white/15",
        "focus-within:!bg-white/15",
        "focus-within:!ring-0",
        "focus-within:!ring-offset-0",
      ],
      label: "group-data-[filled-within]:text-white",
      errorMessage: "text-[#8b0e2e]",
    },
  };

  const {
    register,
    formState: { errors },
  } = useFormContext<IBilling>();

  return (
    <>
      <Input
        disabled={disabled}
        {...inputProps}
        {...register("card_name")}
        placeholder="Name"
        label="Name on card"
        errorMessage={errors.card_name?.message}
      />
      <Input
        disabled={disabled}
        {...inputProps}
        {...register("card_number")}
        placeholder="1111 2222 3333 4444"
        label="Card Number"
        errorMessage={errors.card_number?.message}
      />
      <div className="flex gap-2">
        <Input
          disabled={disabled}
          {...inputProps}
          {...register("exp_date")}
          placeholder="mm/yy"
          label="Expiration date"
          errorMessage={errors.exp_date?.message}
        />
        <Input
          disabled={disabled}
          {...inputProps}
          {...register("cvv")}
          placeholder="123"
          label="CVV"
          errorMessage={errors.cvv?.message}
        />
      </div>
    </>
  );
};
