import Heading from "@/components/common/Heading/Heading"
// import CartItem from "@/components/ecommerce/CartItem"
import CartSubtotalPrice from "@/components/ecommerce/CartSubtotalPrice"
import { actGetProductsByItems } from "@/store/cart/cartSlice"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { useEffect } from "react"

const Cart = () => {
    const dispatch = useAppDispatch();
    const items = useAppSelector((state)=> state.cart)
    useEffect(()=>{
        dispatch(actGetProductsByItems())
    }, [dispatch])
    console.log(items);
    
  return (
    <>
    <Heading children="Cart" />
      {/* <CartItem /> */}
      {/* {items.map(()=>  <CartItem />)} */}
    <CartSubtotalPrice />
    </>
  )
}

export default Cart