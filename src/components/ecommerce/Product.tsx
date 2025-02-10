import { TProduct } from "@/CustomTypes";
import { addToCart } from "@/store/cart/cartSlice";
import { useAppDispatch } from "@/store/hooks";
import { useEffect, useState } from "react";

const Product = ({ id, img, price, title , max , quantity}: TProduct) => {

  const [isButtonDisabled , setIsButtonDisabled] = useState(false);
  const dispatch = useAppDispatch();

  const remainingItemsQuantity = max-(quantity ?? 0);
  const reachedToTheMaxNumber = remainingItemsQuantity <=0 ? true : false ;   
  useEffect(()=>{
    if(!isButtonDisabled) return;
    setIsButtonDisabled(true);
    const timer = setTimeout(()=>{
      setIsButtonDisabled(false);
    },300);
    return ()=> clearTimeout(timer);
  },[isButtonDisabled])

  const addToCartHandler = () => {
    dispatch(addToCart(id))
    console.log("max : " + max , "quantity : " + quantity);
    setIsButtonDisabled(true);
  }
  return (
    <div className=" w-full md:w-[180px] text-center mb-[25px]">
      
      <div className="w-full md:w-[180px] h-[220px] bg-gray-100">
        <img src={img} alt={title} className="w-full md:w-[180px] h-[220px]" />
      </div>
      <p className="font-bold mt-[5px]">{title}</p>
      <p className="mb-[5px]">{price.toFixed(2)} EGP</p>
      <p className="mb-[5px]">{reachedToTheMaxNumber ? "You reached the limit." : "Max Quantity : " + remainingItemsQuantity }  </p>
      
      <button disabled={isButtonDisabled || reachedToTheMaxNumber} className="w-full py-[5px] bg-mainColor text-white" onClick={addToCartHandler}>
        {isButtonDisabled ? "Adding..." : "Add to Cart"}
      </button>
    </div>
  );
};

export default Product;
