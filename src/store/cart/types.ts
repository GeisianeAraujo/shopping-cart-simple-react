import { IProduct } from "../product/types";

export type TypeAction = "add" | "subtract";

export enum CartTypes {
  ADD_CART = "ADD_CART",
  REMOVE_ITEM_CART = "REMOVE_ITEM_CART",
}

export interface ICart {
  product: IProduct;
  quantity: number;
  total: number;
}

export interface CartState {
  readonly cart: ICart[];
}
