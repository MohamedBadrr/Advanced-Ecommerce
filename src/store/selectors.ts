
import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";


const getCartTotalQuantity = createSelector((state:RootState)=> state.cart.items ,
  (items)=>{
    const cartItemsCount = Object.values(items).reduce((acc , item)=> acc + item , 0);
    return cartItemsCount;
} )

export {getCartTotalQuantity};