import UpFilledIcon from "@assets/up-filled-icon.svg";
import { Card } from "@nextui-org/card";
import { CardBody, Image } from "@nextui-org/react";

import { Title } from "@/components/title";
import { CartItemDelete } from "@/pages/cart-page/components/cart-items/cart-item-delete";
import { useCartStore } from "@/store/cart.store";
import { ICartItem } from "@/types/cart.interface";

interface CartItemPops {
  item: ICartItem;
}

export const CartItem = ({ item }: CartItemPops) => {
  const increaseCartCount = useCartStore((state) => state.increase);
  const decreaseCartCount = useCartStore((state) => state.decrease);

  return (
    <Card className="shadow-[0px_1px_4px_0px_#00000025]">
      <CardBody className="flex-col items-center justify-between px-2.5 py-[9px] lg:flex-row lg:pr-5">
        <div className="flex w-full flex-col gap-4 lg:flex-row lg:items-center">
          <div>
            <Image
              src={item.img}
              alt={item.name}
              classNames={{
                wrapper: "h-60 lg:h-[82px] lg:w-20 !max-w-full",
              }}
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
          <Title
            title={item.name}
            subtitle={item.description}
            classNames={{
              wrapper: "lg:w-60 xl:w-[400px] 2xl:w-[500px]",
              subtitle: "line-clamp-3 lg:line-clamp-2",
            }}
          />
        </div>
        <div className="flex w-full flex-row items-center justify-between px-10 pt-5 lg:p-0">
          <div className="flex gap-1.5 text-[22px]">
            {item.count}
            <div className="space-y-0.5">
              <img
                src={UpFilledIcon}
                alt="up"
                className="cursor-pointer"
                onClick={() => increaseCartCount(item.id)}
              />
              <div className="rotate-180">
                <img
                  src={UpFilledIcon}
                  alt="down"
                  className="cursor-pointer"
                  onClick={() => decreaseCartCount(item.id)}
                />
              </div>
            </div>
          </div>
          <div className="text-lg font-medium lg:text-xl">
            ${item.count * item.price}
          </div>
          <CartItemDelete id={item.id} />
        </div>
      </CardBody>
    </Card>
  );
};
