export type ProductT = {
  id: string;
  name: string;
  price: number;
  images: Array<string>;
  description: string;
  isBest: boolean;
  category: string;
  quantity?: number;
  totalPrice?: number;
};

export type SortByT = {
  options: {
    value: "name-asc" | "name-desc" | "price-asc" | "price-desc";
    label: string;
  }[];
};
export type FilterT = {
  options: {
    value: string;
    label: string;
  }[];
};
