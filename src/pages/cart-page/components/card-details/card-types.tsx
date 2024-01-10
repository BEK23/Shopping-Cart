import { Button, Image } from "@nextui-org/react";

import { cardTypes } from "@/indexDB.json";

type CardTypesProps = {
  disabled?: boolean;
};

export const CardTypes = ({ disabled }: CardTypesProps) => {
  return (
    <div className="mb-7">
      <div className="mb-3.5 font-nunito text-base">Card type</div>
      <div className="grid grid-cols-4 gap-4">
        {cardTypes.map((item) => (
          <div
            className="flex h-[55px] items-center justify-center overflow-hidden rounded-[5px] bg-[#D9D9D9]/20"
            key={item.id}
          >
            <Image src={item.img} alt={item.name} className="m-auto w-[80%]" />
          </div>
        ))}
        <Button
          disabled={disabled}
          disableRipple={disabled}
          disableAnimation={disabled}
          className="h-[55px] min-w-fit rounded-[5px] bg-[#D9D9D9]/20 p-0 font-open-sans font-bold text-white"
        >
          See All
        </Button>
      </div>
    </div>
  );
};
