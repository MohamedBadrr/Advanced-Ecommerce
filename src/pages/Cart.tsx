import Heading from "@/components/common/Heading/Heading"
import CartList from "@/components/ecommerce/Cart/CartList"
import CartSubtotalPrice from "@/components/ecommerce/Cart/CartSubtotalPrice"
import { actGetProductsByItems, changeItemQuantity , cartItemRemove, cartCleanUp} from "@/store/cart/cartSlice"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { useCallback, useEffect } from "react"

const Cart = () => {
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
  return (
    <>
    <Heading children="Your Cart" />
    {productCartList.length>0 ? <>
      <CartList products={productCartList} deleteItemHandler={deleteItemHandler}  changeQuantityHandler={changeQuantityHandler}/>
      <CartSubtotalPrice products = {productCartList} />
      </> : 
      <p className="text-[40px] ">Your Cart is Empty</p>
      }
    </>
  )
}

export default Cart