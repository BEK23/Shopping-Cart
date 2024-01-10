import RightIcon from "@assets/right-icon.svg";
import { Button, Divider, Input, InputProps } from "@nextui-org/react";
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
        "focus-within:!bg-white/15",
        "focus-within:!ring-0",
        "focus-within:!ring-offset-0",
      ],
      label: "group-data-[filled-within]:text-white",
    },
  };

  return (
    <form className="flex grow flex-col justify-between gap-2.5">
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

      <Divider className="mb-1 mt-2 bg-[#5f65c3]" />

      <div className="mb-2 space-y-1.5 font-medium">
        <div className="flex justify-between">
          <div>Subtotal</div>
          <div>$1,668</div>
        </div>
        <div className="flex justify-between">
          <div>Shipping</div>
          <div>$4</div>
        </div>
        <div className="flex justify-between">
          <div>Total (Tax incl.)</div>
          <div>$1,672</div>
        </div>
      </div>

      <Button
        color="success"
        className="flex h-14 justify-between py-0.5 text-base text-white"
      >
        $1,672
        <div className="flex items-center gap-1">
          Checkout <img src={RightIcon} alt="right" />
        </div>
      </Button>
    </form>
  );
};
