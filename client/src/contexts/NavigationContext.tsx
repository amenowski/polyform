import { createContext, ReactNode, useContext, useState } from "react";

type NavigationContextProviderProps = {
  children: ReactNode;
};

type NavigationContext = {
  isNavigationOpen: boolean;
  setIsNavigationOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const NavigationContext = createContext<NavigationContext | undefined>(
  undefined,
);

export default function NavigationContextProvider({
  children,
}: NavigationContextProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavigationContext.Provider
      value={{ isNavigationOpen: isOpen, setIsNavigationOpen: setIsOpen }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigationContext() {
  const context = useContext(NavigationContext);
  if (context === undefined)
    throw new Error(
      "useNavigationContext must be used within a NevContextProvider",
    );

  return context;
}
