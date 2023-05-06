import { createContext, useEffect, useReducer, useState } from "react";
export const AppProvider = createContext(null);

const initialState = {
  products: JSON.parse(localStorage.getItem("product")) || [],
};
const reduser = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case "DELETE":
      return {
        ...state,
        products: state.products.filter((el) => el.id !== action.payload),
      };
    case "PLUS":
      return {
        ...state,
        products: state.products.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              quantity: item.quantity + 1,
              price: item.price + item.total,
            };
          }
          return item;
        }),
      };
    case "MINUS":
      return {
        ...state,
        products: state.products.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              quantity: item.quantity > 1 ? item.quantity - 1 : 1,
              price:
                item.price > item.total ? item.price - item.total : item.total,
            };
          }
          return item;
        }),
      };
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const product = [
    {
      id: 1,
      img: "https://pngimg.com/uploads/strawberry/strawberry_PNG77.png",
      title: "Berry",
      price: 12,
      quantity: 1,
      total: 12,
    },
    {
      id: 2,
      img: "https://static.vecteezy.com/system/resources/previews/008/532/603/original/kiwi-fruit-cutout-file-png.png",
      title: "Kiwi",
      price: 32,
      quantity: 1,
      total: 32,
    },
    {
      id: 3,
      img: "https://www.pngall.com/wp-content/uploads/11/Red-Apple-PNG.png",
      title: "Apple",
      price: 9,
      quantity: 1,
      total: 9,
    },
  ];
  const [state, dispatch] = useReducer(reduser, initialState);

  const addProduct = (id) => {
    const existingItemIndex = state.products.findIndex(
      (item) => item.id === id
    );
    if (existingItemIndex !== -1) {
      return null;
    } else {
      const productToAdd = product.find((item) => item.id === id);
      dispatch({ type: "ADD", payload: { ...productToAdd, quantity: 1 } });
    }
  };
  useEffect(() => {
    localStorage.setItem("product", JSON.stringify(state.products));
  }, [state]);

  const deleteProduct = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };
  const quantityPlus = (id) => {
    dispatch({ type: "PLUS", payload: id });
  };
  const quantityMinus = (id) => {
    dispatch({ type: "MINUS", payload: id });
  };

  const total = state.products
    .map((item) => (item.quantity === 0 ? { ...item }.price : item.price))
    .reduce((a, b) => a + b, 0);

  const store = {
    products: state.products,
    product,
    addProduct,
    deleteProduct,
    quantityPlus,
    quantityMinus,
    total,
  };
  return <AppProvider.Provider value={store}>{children}</AppProvider.Provider>;
};
