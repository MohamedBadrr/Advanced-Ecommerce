import GridList from '@/components/common/GridList/GridList';
import Heading from '@/components/common/Heading/Heading'
import Loading from '@/components/common/Loading/Loading';
import Product from '@/components/ecommerce/Product';
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { actGetWishlist, wishListCleanUp } from '@/store/wishList/wishListSlice';
import { useEffect } from 'react';

const WishList = () => {

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

  if (error) {
    return <Loading error={error} />;
  }
  if (loading === "pending") {
    return <Loading status={loading} />;
  }

  return (
   <div>
    <Heading children={" Your Wishlist "} /> 
     {productFullInfo.length > 0 ?<GridList
     noItems=''
      data={productFullInfo}
      renderItem={(product) => <Product {...product} />}
    />:  <p className="text-[40px] ">Your Wishlist is Empty</p>
    }
   </div>
  );
}

export default WishList