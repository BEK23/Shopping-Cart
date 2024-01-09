import { Input, InputProps } from "@nextui-org/react";
import { useForm } from "react-hook-form";

export const CardForm = () => {
  const { register } = useForm();

  const inputProps: InputProps = {
    labelPlacement: "outside",
    classNames: {
      input: "bg-transparent placeholder:text-[#c4c4c4] text-xs !text-white",
      innerWrapper: "bg-transparent",
      inputWrapper: [
        "bg-[#6268c6]",
        "hover:!bg-[#6268c6]",
        "focus-within:!bg-[#6268c6]",
        "group-data-[focus-visible]:ring-0",
        "group-data-[focus-visible]:ring-offset-0",
      ],
      label: "group-data-[filled-within]:text-white",
    },
  };

  return (
    <>
      <form className="flex flex-col gap-2.5">
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
      </form>
    </>
  );
};
