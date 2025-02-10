import GridList from "@/components/common/GridList/GridList";
import Heading from "@/components/common/Heading/Heading";
import Loading from "@/components/common/Loading/Loading";
import Product from "@/components/ecommerce/Product";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  actGetProductsByCat_Prefix,
  productsCleanUp,
} from "@/store/products/productsSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Products = () => {
  const dispatch = useAppDispatch();
  const { cat_prefix } = useParams();
  const { products, error, loading } = useAppSelector(
    (state) => state.products
  );
  const cartItems = useAppSelector((state) => state.cart.items);
  const productFullInfo = products.map((product) => ({
    ...product,
    quantity: cartItems[product.id] || 0,
  }));
  useEffect(() => {
    dispatch(actGetProductsByCat_Prefix(cat_prefix as string));
    dispatch(productsCleanUp());
  }, [dispatch, cat_prefix]);

  if (error) {
    return <Loading error={error} />;
  }
  if (loading === "pending") {
    return <Loading status={loading} />;
  }

  return (
   <div>
    <Heading children={cat_prefix?.toUpperCase() + " Products "} /> 
     <GridList
      noItems="There are no products in this category"
      data={productFullInfo}
      renderItem={(product) => <Product {...product} />}
    />
   </div>
  );
};

export default Products;
