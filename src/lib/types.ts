export type Product = {
  id: number;
  name: string;
  price: number;
  images: Array<string>;
  description: string;
  isBest: boolean;
  category: string;
  quantity?: number;
  totalPrice?: number;
};
