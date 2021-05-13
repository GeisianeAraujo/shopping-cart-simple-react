export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

export interface ProductState {
  readonly products: IProduct[];
}
