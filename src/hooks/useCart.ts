import { actGetProductsByItems, changeItemQuantity , cartItemRemove, cartCleanUp} from "@/store/cart/cartSlice"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { useCallback, useEffect } from "react"
const useCart = () => {
    const dispatch = useAppDispatch();
    useEffect(()=>{
      dispatch(actGetProductsByItems());
  }, [dispatch])
  
    const { productsFullInfo , items} = useAppSelector((state)=> state.cart);
    const productCartList = productsFullInfo.map((el)=>({...el,quantity:items[el.id]}));
    
    const changeQuantityHandler = useCallback((id:number , quantity : number)=>{
      dispatch(changeItemQuantity({id,quantity}));
    },[dispatch])

    const deleteItemHandler = (id:number)=>{
      dispatch(cartItemRemove(id));
      return ()=>{dispatch(cartCleanUp())}
    }
  return {productCartList , changeQuantityHandler , deleteItemHandler }
}

export default useCart