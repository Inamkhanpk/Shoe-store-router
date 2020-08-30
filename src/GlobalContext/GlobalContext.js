import { createContext } from "react";
import  {products as productData}   from "./../utils/productData";

export const initialState = {
  products:productData,
};

const GlobalContext = createContext(initialState);

export default GlobalContext;