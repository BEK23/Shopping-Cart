import { Button } from "@nextui-org/react";

export const CardTypes = () => {
  const types = ["mastercard", "visa", "ru-pay"];

  return (
    <>
      <div className="mb-3.5 text-base">Card type</div>
      <div className="grid grid-cols-4 gap-4">
        {types.map((item) => (
          <div
            className="flex h-[55px] items-center justify-center overflow-hidden rounded-[5px] bg-[#D9D9D9]/20"
            key={item}
          >
            {item}
          </div>
        ))}
        <Button className="h-[55px] min-w-fit rounded-[5px] bg-[#D9D9D9]/20 p-0 font-bold text-white">
          See All
        </Button>
      </div>
    </>
  );
};
