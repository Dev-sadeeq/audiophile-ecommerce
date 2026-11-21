import { useState, createContext, useContext, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    let exist = localStorage.getItem("cart")
  return exist ? JSON.parse(exist) : []
  });

  useEffect(()=>{
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart])



  function addToCart(product) {
    setCart((prevCart) => {
      const exist = prevCart.find((item) => item.id === product.id);
      if (exist) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item,
        );
      } else {
        return [...prevCart, product];
      }
    });
  }

    const formatPrice = (amount) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);

  function formatCartName(name) {
  return name
    .replace(/wireless earphones|headphones|earphones|speaker/gi, "")
    .replace(/mark/gi, "MK")
    .trim();
}


 function handleAdd(item) {
  setCart((prevCart) =>
    prevCart.map((currentItem) => {
      return(
        item.id === currentItem.id 
        ?
       {...currentItem, quantity: currentItem.quantity + 1} :

          currentItem
        )
    })
  );
}

 function handleSub(item) {
  setCart((prevCart) =>
    prevCart.map((currentItem) => {
      return(
        item.id === currentItem.id 
        ?
       {...currentItem, quantity: currentItem.quantity - 1} :

          currentItem
        )
    }).filter((currentItem) => currentItem.quantity > 0)
  );
}

function removeAll(){
  setCart([])
}


  const cartCount = cart.reduce((acc, currentItem) => {
    return acc + currentItem.quantity;
  }, 0);

  const subTotal = cart.reduce((total, currentItem) => {
    return currentItem.price * currentItem.quantity + total;
  }, 0);

  return (
    <CartContext.Provider
      value={{ cart, setCart, addToCart, cartCount, subTotal, formatPrice, formatCartName, handleAdd, handleSub, removeAll }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
