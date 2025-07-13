import { createContext, useState } from "react";

export const CarrinhoContext = createContext();

//baixada extensão react context
CarrinhoContext.displayName = "Carrinho"

export const CarrinhoProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([]);

  return (
    <CarrinhoContext.Provider value={{ carrinho, setCarrinho }}>
      {children}
    </CarrinhoContext.Provider>
  );
};
