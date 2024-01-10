import { Input, InputProps } from "@nextui-org/react";
import { useFormContext } from "react-hook-form";

export const BillingFormFields = () => {
  const inputProps: InputProps = {
    labelPlacement: "outside",
    classNames: {
      input: "bg-transparent placeholder:text-[#c4c4c4] text-xs !text-white",
      innerWrapper: "bg-transparent",
      inputWrapper: [
        "bg-[#6268c6]",
        "hover:!bg-[#6268c6]",
        "focus-within:!bg-white/15",
        "focus-within:!ring-0",
        "focus-within:!ring-offset-0",
      ],
      label: "group-data-[filled-within]:text-white",
    },
  };

  const { register } = useFormContext();

  return (
    <>
      <Input
        {...inputProps}
        {...register("card_name")}
        placeholder="Name"
        label="Name on card"
      />
      <Input
        {...inputProps}
        {...register("card_number")}
        placeholder="1111 2222 3333 4444"
        label="Card Number"
      />
      <div className="flex gap-2">
        <Input
          {...inputProps}
          {...register("exp_date")}
          placeholder="mm/yy"
          label="Expiration date"
        />
        <Input
          {...inputProps}
          {...register("cvv")}
          placeholder="123"
          label="CVV"
        />
      </div>
    </>
  );
};
