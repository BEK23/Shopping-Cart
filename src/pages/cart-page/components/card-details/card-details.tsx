import { Card } from "@nextui-org/card";
import { Avatar, CardBody, CardHeader } from "@nextui-org/react";

import { profile } from "@/indexDB.json";
import { cn } from "@/lib/utils";
import { useCartStore } from "@/store/cart.store";

import { CardForm } from "./card-form";
import { CardTypes } from "./card-types";

export const CardDetails = () => {
  const subtotal = useCartStore((state) => state.subtotal);

  return (
    <Card
      classNames={{
        base: cn(
          "h-full max-h-[640px] w-97 bg-primary text-white p-5",
          !subtotal && "opacity-70",
        ),
        header: "flex justify-between text-[22px] font-semibold p-0",
        body: "p-0",
      }}
    >
      <CardHeader>
        Card Details
        <Avatar
          src={profile.img}
          classNames={{ base: "w-12.5 h-12.5 rounded-lg" }}
        />
      </CardHeader>
      <CardBody>
        <CardTypes disabled={!subtotal} />
        <CardForm disabled={!subtotal} />
      </CardBody>
    </Card>
  );
};
