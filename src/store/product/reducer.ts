import { Reducer } from "redux";
import { ProductState } from "./types";
import { defineState } from "redux-localstore";

import img1 from "../../assets/images/products/img1.jpg";
import img2 from "../../assets/images/products/img2.jpg";
import img3 from "../../assets/images/products/img3.jpg";
import img4 from "../../assets/images/products/img4.jpg";

const DEFAULT_STATE = {
  products: [
    {
      id: 1,
      title: "Reconstrutor",
      description: "Brilho & anti-frizz",
      price: 53.99,
      image: img1,
    },
    {
      id: 2,
      title: "Perfume Di Gioia",
      description: "Floral",
      price: 110.3,
      image: img2,
    },
    {
      id: 3,
      title: "Hidatante Nora",
      description: "Corpo",
      price: 60.0,
      image: img3,
    },
    {
      id: 4,
      title: "Hidratante Onne",
      description: "Facial & corporal",
      price: 180.99,
      image: img4,
    },
  ],
};

const INITIAL_STATE = defineState(DEFAULT_STATE)("product");

const reducer: Reducer<ProductState> = (state = INITIAL_STATE) => {
  return state;
};

export default reducer;
