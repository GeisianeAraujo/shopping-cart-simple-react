import { createStore, Store } from "redux";
import { CartState } from "./cart/types";
import rootReducer from "./rootReducer";
import storeSynchronize from "redux-localstore";
import { ProductState } from "./product/types";

export interface ApplicationState {
  product: ProductState;
  cart: CartState;
}

const store: Store<ApplicationState> = createStore(rootReducer);
storeSynchronize(store);

export default store;
