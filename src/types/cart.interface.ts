import { IProduct } from "./product.interface";

export interface ICartItem extends IProduct {
  count: number;
}
