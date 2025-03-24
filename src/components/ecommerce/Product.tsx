import { TProduct } from "@/CustomTypes";
import { addToCart } from "@/store/cart/cartSlice";
import { useAppDispatch } from "@/store/hooks";
import { actLikeItem } from "@/store/wishList/wishListSlice";
import { memo, useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

const Product = memo(({
  id,
  img,
  price,
  title,
  max,
  quantity,
  isLiked,
}: TProduct) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const dispatch = useAppDispatch();

  const remainingItemsQuantity = max - (quantity ?? 0);
  const reachedToTheMaxNumber = remainingItemsQuantity <= 0 ? true : false;

  useEffect(() => {
    if (!isButtonDisabled) return;
    setIsButtonDisabled(true);
    const timer = setTimeout(() => {
      setIsButtonDisabled(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [isButtonDisabled]);

  const addToCartHandler = () => {
    dispatch(addToCart(id));
    console.log("max : " + max, "quantity : " + quantity);
    setIsButtonDisabled(true);
  };

  const likeHandler = () => {
    dispatch(actLikeItem(id));
  };
  return (
    <div className=" relative w-full md:w-[180px] text-center mb-[25px]">
      <div className="absolute right-[1px] text-white  m-2 ">
        {isLiked ? (
          <FaHeart
            onClick={likeHandler}
            color="white"
            className=" rounded-[15%] cursor-pointer text-[25px] bg-gray-200 p-[2px] fill-red-500 transition-all duration-500"
          />
        ) : (
          <CiHeart
            onClick={likeHandler}
            color="white"
            className=" rounded-[15%] cursor-pointer text-[25px] fill-red-500 p-[2px] bg-gray-200  transition-all duration-500"
          />
        )}
      </div>
      <div className="w-full md:w-[180px] h-[220px] bg-gray-100">
        <img src={img} alt={title} className="w-full md:w-[180px] h-[220px]" />
      </div>
      <p className="font-bold mt-[5px]">{title}</p>
      <p className="mb-[5px]">{price.toFixed(2)} EGP</p>
      <p className="mb-[5px]">
        {reachedToTheMaxNumber
          ? "You reached the limit."
          : "Max Quantity : " + remainingItemsQuantity}{" "}
      </p>

      <button
        disabled={isButtonDisabled || reachedToTheMaxNumber}
        className="w-full py-[5px] bg-mainColor text-white"
        onClick={addToCartHandler}
      >
        {isButtonDisabled ? "Adding..." : "Add to Cart"}
      </button>
    </div>
  );
});

export default Product;
