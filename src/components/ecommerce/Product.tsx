import { TProduct } from "@/CustomTypes";
import { addToCart } from "@/store/cart/cartSlice";
import { useAppDispatch } from "@/store/hooks";
import { useEffect, useState } from "react";

const Product = ({ id, img, price, title }: TProduct) => {

  const [isButtonClicked , setIsButtonClicked] = useState(0);
  const [isButtonDisabled , setIsButtonDisabled] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(()=>{
    if(!isButtonClicked) return;
    setIsButtonDisabled(true);
    const timer = setTimeout(()=>{
      setIsButtonDisabled(false);
    },300);
    return ()=> clearTimeout(timer);
  },[isButtonClicked])

  const addToCartHandler = () => {
    dispatch(addToCart(id))
    setIsButtonClicked((prev)=>prev+1);
  }
  return (
    <div className=" w-full md:w-[180px] text-center mb-[25px]">
      
      <div className="w-full md:w-[180px] h-[220px] bg-gray-100">
        <img src={img} alt={title} className="w-full md:w-[180px] h-[220px]" />
      </div>
      <p className="font-bold mt-[5px]">{title}</p>
      <p className="mb-[5px]">{price} EGP</p>
      
      <button disabled={isButtonDisabled} className="w-full py-[5px] bg-mainColor text-white" onClick={addToCartHandler}>
        {isButtonDisabled ? "Adding..." : "Add to Cart"}
      </button>
    </div>
  );
};

export default Product;
