import { createContext, ReactNode, useContext, useState } from "react";

type CartPreviewProviderProps = {
  children: ReactNode;
};

type CartPreviewContext = {
  isCartPreviewOpen: boolean;
  setIsCartPreviewOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CartPreviewContext = createContext<CartPreviewContext | undefined>(
  undefined,
);

export default function CartPreviewProvider({
  children,
}: CartPreviewProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <CartPreviewContext.Provider
      value={{ isCartPreviewOpen: isOpen, setIsCartPreviewOpen: setIsOpen }}
    >
      {children}
    </CartPreviewContext.Provider>
  );
}

export function useCartPreviewContext() {
  const context = useContext(CartPreviewContext);
  if (context === undefined)
    throw new Error(
      "useCartPreviewContext must be used within a CartPreviewProvider",
    );

  return context;
}
