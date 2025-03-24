import GridList from "@/components/common/GridList/GridList";
import Heading from "@/components/common/Heading/Heading";
import Loading from "@/components/common/Loading/Loading";
import Category from "@/components/ecommerce/Category";
import useCategories from "@/hooks/useCategories";


const Categories = () => {
  
  const {categories , error , loading} = useCategories();
  if (error) {
    return <Loading error={error} />;
  }
  if (loading === "pending") {
    return <Loading status={loading} type="category"/>;
  }
  return (
    <div>
      <Heading title="Categories" />
      <GridList
        noItems="There are no categories"
        data={categories}
        renderItem={(category) => <Category {...category} />}
      />
    </div>
  );
};

export default Categories;
