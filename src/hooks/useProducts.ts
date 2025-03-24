
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  actGetProductsByCat_Prefix,
  CleanUpProducts,
} from "@/store/products/productsSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
const useProducts = () => {
    const dispatch = useAppDispatch();
  const { cat_prefix } = useParams();
  const { products, error, loading } = useAppSelector(
    (state) => state.products
  );
  const cartItems = useAppSelector((state) => state.cart.items);
  const wishListItems = useAppSelector((state) => state.wishList.itemsId);
  const productFullInfo = products.map((product) => ({
    ...product,
    quantity: cartItems[product.id] || 0,
    isLiked: wishListItems.includes(product.id),
  }));
  useEffect(() => {
    const promise =dispatch(actGetProductsByCat_Prefix(cat_prefix as string));
    return () => {
      dispatch(CleanUpProducts());
      promise.abort();
    };
  }, [dispatch, cat_prefix]);


 return{error , loading , productFullInfo , cat_prefix}
}

export default useProducts