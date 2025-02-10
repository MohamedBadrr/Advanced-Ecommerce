import GridList from "@/components/common/GridList/GridList";
import Heading from "@/components/common/Heading/Heading";
import Loading from "@/components/common/Loading/Loading";
import Category from "@/components/ecommerce/Category"
import { actGetCategories } from "@/store/categories/categoriesSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { useEffect } from "react";

const Categories = () => {
  const dispatch = useAppDispatch();
  const {categories , error , loading} = useAppSelector((state) => state.categories);

  useEffect(()=>{
    if(!categories.length){
      dispatch(actGetCategories())
    }
  },[dispatch , categories.length])
  if(error){
    return <Loading  error={error}/>
  }
  if(loading === "pending"){
    return <Loading  status={loading}/>
  }
  return (
      <div>
        <Heading children="Categories" />
        <GridList noItems="There are no categories" data={categories} renderItem={(category)=> <Category  {...category} />} />
      </div>
  )
}

export default Categories