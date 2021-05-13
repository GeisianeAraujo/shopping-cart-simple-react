import { ICart } from "./types";

export const addItemCart = (payload: ICart) => {
  return {
    type: "ADD_CART",
    payload: {
      product: payload.product,
      quantity: 1,
      total: payload.total,
    },
  };
};
export const removeItemCart = (payload: ICart) => {
  return {
    type: "REMOVE_ITEM_CART",
    payload: {
      product: payload.product,
    },
  };
};
