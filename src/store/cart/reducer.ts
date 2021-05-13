import { Reducer } from "redux";
import { CartState, CartTypes, ICart, TypeAction } from "./types";
import { defineState } from "redux-localstore";

const DEFAULT_STATE = {
  cart: [],
};

const INITIAL_STATE = defineState(DEFAULT_STATE)("cart");

const getFunctionByTypeActionCart: Record<TypeAction, (quantity: number) => number> = {
  add: (quantity: number) => quantity + 1,
  subtract: (quantity: number) => quantity - 1,
};

const updateItemQuantity = (cart: ICart[], payload: ICart, type: TypeAction) => {
  const itemCart = cart.find((item: ICart) => item.product.id === payload.product.id);
  if (itemCart) {
    let newCart: ICart[] = [...cart];
    newCart = newCart.map((item: ICart) => {
      if (itemCart.product.id === item.product.id) {
        const newItem = { ...item };
        const calcQuantity = getFunctionByTypeActionCart[type];
        newItem.quantity = calcQuantity(newItem.quantity);
        if (newItem.quantity <= 0) {
          newItem.total = 0;
        } else {
          newItem.total = item.product.price * newItem.quantity;
        }
        return newItem;
      }
      return item;
    });
    return newCart.filter((item: ICart) => item.quantity > 0);
  }
  return cart;
};

const reducer: Reducer<CartState> = (state = INITIAL_STATE, action) => {
  let cart = [...state.cart];
  switch (action.type) {
    case CartTypes.ADD_CART:
      const product = cart.find((item) => item.product.id === action.payload.product.id);
      if (product) {
        const typeAdd: TypeAction = "add";
        cart = updateItemQuantity(cart, action.payload, typeAdd);
      } else {
        cart.push(action.payload);
      }
      return {
        ...state,
        cart,
      };
    case CartTypes.REMOVE_ITEM_CART:
      const typeSubtract: TypeAction = "subtract";
      const newCart = updateItemQuantity(cart, action.payload, typeSubtract);
      return {
        ...state,
        cart: newCart,
      };
    default:
      return state;
  }
};

export default reducer;
