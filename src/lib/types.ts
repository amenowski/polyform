export type ProductT = {
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

export type LoginProps = {
  email: string;
  password: string;
};

export type SignupProps = {
  name: string;
  email: string;
  password: string;
  lastName: string;
  passwordConfirm?: string;
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
