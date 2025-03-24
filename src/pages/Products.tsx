
import GridList from "@/components/common/GridList/GridList";
import Heading from "@/components/common/Heading/Heading";
import Loading from "@/components/common/Loading/Loading";
import Product from "@/components/ecommerce/Product";
import useProducts from "@/hooks/useProducts";


const Products = () => {
 
  const { error , loading , productFullInfo ,cat_prefix } = useProducts();
  if (error) {
    return <Loading error={error} />;
  }
  if (loading === "pending") {
    return <Loading status={loading} type="product"/>;
  }
  return (
    <div>
      <Heading title={cat_prefix?.toUpperCase() + " Products "} />
      <GridList
        noItems="There are no products in this category"
        data={productFullInfo}
        renderItem={(product) => <Product {...product} />}
      />
    </div>
  );
};

export default Products;
