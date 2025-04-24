import { actGetProductsByItems, changeItemQuantity , cartItemRemove, cartCleanUp} from "@/store/cart/cartSlice"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { clearOrders } from "@/store/orders/ordersSlice";
import { useCallback, useEffect } from "react"
const useCart = () => {
    const dispatch = useAppDispatch();

    const { productsFullInfo , items} = useAppSelector((state)=> state.cart);

    const productCartList = productsFullInfo.map((el)=>({...el,quantity:items[el.id]}));

    const userAccessToken = useAppSelector((state)=>state.auth.loginData.accessToken);

    const placeOrderLoading = useAppSelector((state)=>state.orders.loading);

    const changeQuantityHandler = useCallback((id:number , quantity : number)=>{
      dispatch(changeItemQuantity({id,quantity}));
    },[dispatch])

    const deleteItemHandler = (id:number)=>{
      dispatch(cartItemRemove(id));
      return ()=>{dispatch(cartCleanUp())}
    }

    useEffect(()=>{
      dispatch(actGetProductsByItems());
      dispatch(clearOrders());
  }, [dispatch])
  
  return {productCartList , changeQuantityHandler , deleteItemHandler ,userAccessToken , placeOrderLoading }
}

export default useCart