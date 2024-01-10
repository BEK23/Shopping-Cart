import TrashIcon from "@assets/trash-icon.svg";
import UpFilledIcon from "@assets/up-filled-icon.svg";
import { Card } from "@nextui-org/card";
import { CardBody, Image } from "@nextui-org/react";

import { Title } from "@/components/title";
import { ICartItem } from "@/types/cart.interface";

interface CartItemPops {
  item: ICartItem;
}

export const CartItem = ({ item }: CartItemPops) => {
  return (
    <Card className="shadow-[0px_1px_4px_0px_#00000025]">
      <CardBody className="flex-row items-center justify-between py-[9px] pl-2.5 pr-5">
        <div className="flex items-center gap-4">
          <div>
            <Image
              src={item.img}
              alt={item.name}
              classNames={{ wrapper: "h-[82px] w-20" }}
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
          <Title
            title={item.name}
            subtitle={item.description}
            classNames={{
              wrapper: "lg:w-60 xl:w-[400px] 2xl:w-[500px]",
              subtitle: "line-clamp-2",
            }}
          />
        </div>
        <div className="flex gap-1.5 text-[22px]">
          {item.count}
          <div className="space-y-0.5">
            <img src={UpFilledIcon} alt="up" className="cursor-pointer" />
            <div className="rotate-180">
              <img src={UpFilledIcon} alt="down" className="cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="font-medium">${item.count * item.price}</div>
        <img src={TrashIcon} alt="delete" />
      </CardBody>
    </Card>
  );
};