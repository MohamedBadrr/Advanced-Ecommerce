import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { actGetWishlist, wishListCleanUp } from '@/store/wishList/wishListSlice';
import { useEffect } from 'react';

const useWishList = () => {
    
  const dispatch = useAppDispatch();
  const {productsFullInfo , loading , error} = useAppSelector((state)=>state.wishList)
  const productFullInfo =  productsFullInfo.map((el)=>({
    ...el,
    isLiked:true
  }))
  useEffect(()=>{
    dispatch(actGetWishlist());
    return ()=>{dispatch(wishListCleanUp())}
  },[dispatch])


  return {productFullInfo , loading , error}
}

export default useWishList