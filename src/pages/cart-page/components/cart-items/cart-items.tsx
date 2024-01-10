import { ICartItem } from "../../../../types/cart.interface";
import { CartItem } from "./cart-item";

export const CartItems = () => {
  const items: ICartItem[] = [
    {
      id: 0,
      name: "Italy Pizza",
      description:
        "Extra cheese and topingExtra cheese and topingExtra cheese and toping",
      img: "https://www.southernliving.com/thmb/3x3cJaiOvQ8-3YxtMQX0vvh1hQw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2652401_QFSSL_SupremePizza_00072-d910a935ba7d448e8c7545a963ed7101.jpg",
      price: 681,
      count: 1,
    },
    {
      id: 1,
      name: "Combo Plate",
      description: "Extra cheese and toping",
      img: "",
      price: 681,
      count: 1,
    },
    {
      id: 2,
      name: "Spanish Rice",
      description: "Extra garllic",
      img: "",
      price: 681,
      count: 1,
    },
  ];

  return (
    <div className="space-y-6">
      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
};
