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
