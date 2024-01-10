import { Card } from "@nextui-org/card";
import { Avatar, CardBody, CardHeader } from "@nextui-org/react";

import { CardForm } from "./card-form";
import { CardTypes } from "./card-types";

export const CardDetails = () => {
  return (
    <Card
      classNames={{
        base: "h-full max-h-[640px] w-97 bg-primary text-white p-5",
        header: "flex justify-between text-[22px] font-semibold p-0",
        body: "p-0",
      }}
    >
      <CardHeader>
        Card Details
        <Avatar classNames={{ base: "w-12.5 h-12.5 rounded-lg" }}></Avatar>
      </CardHeader>
      <CardBody>
        <CardTypes />
        <CardForm />
      </CardBody>
    </Card>
  );
};
