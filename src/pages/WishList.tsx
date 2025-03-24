import GridList from '@/components/common/GridList/GridList';
import Heading from '@/components/common/Heading/Heading'
import Loading from '@/components/common/Loading/Loading';
import Product from '@/components/ecommerce/Product';
import LootieHandler from '@/components/feedback/LootieHandler';
import useWishList from '@/hooks/useWishList';
  
const WishList = () => {
  const {error , productFullInfo , loading} = useWishList();
  if (error) {
    return <Loading error={error} />;
  }
  if (loading === "pending") {
    return <Loading status={loading} type='product' />;
  }

  return (
   <div>
     {productFullInfo.length > 0 ?<>
      <Heading title={" Your Wishlist "} /> 
      <GridList
     noItems='Your Wishlist is Empty'
      data={productFullInfo}
      renderItem={(product) => <Product {...product} />}
    />
     </>: <div className='mb-[40px]'><LootieHandler type='empty' message='Your Wishlist is Empty' /></div>}
   </div>
  );
}

export default WishList