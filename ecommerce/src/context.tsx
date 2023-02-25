import { createContext, useState } from "react";

export const AppDataContext = createContext<{
  user: any;
  setUser: any;
  products: any;
  setProducts: any;
  orders: any;
  setOrders: any;
  carts: any;
  setCarts: any;
}>({
  user: null,
  setUser: null,
  products: null,
  setProducts: null,
  orders: null,
  setOrders: null,
  carts: null,
  setCarts: null,
});

const AppProvider = ({ children }: any) => {
  const [user, setUser] = useState<any | null>(null);
  const [products, setProducts] = useState<any | null>(null);
  const [orders, setOrders] = useState<any | null>(null);
  const [carts, setCarts] = useState<any | null>(null);
  return (
    <AppDataContext.Provider
      value={{
        user,
        setUser,
        products,
        setProducts,
        orders,
        setOrders,
        carts,
        setCarts,
      }}
    >
      {children}
    </AppDataContext.Provider>
  );
};

export default AppProvider;
