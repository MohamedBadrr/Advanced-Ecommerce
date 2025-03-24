
import CartSkeleton from "@/components/ecommerce/skeletons/cartSkeleton/CartSkeleton";
import CategorySkeleton from "@/components/ecommerce/skeletons/categorySkeleton/CategorySkeleton";
import ProductSkeleton from "@/components/ecommerce/skeletons/productSkeleton/ProductSkeleton";
import LootieHandler from "@/components/feedback/LootieHandler";
import { TLoading } from "@/CustomTypes"

const skeletonTypes = {
  category: CategorySkeleton,
  product: ProductSkeleton,
  cart: CartSkeleton
}

type LoadingProps = {
    status?: TLoading,
    error? : string,
    type? : keyof typeof skeletonTypes;
}
const Loading = ({ error , status , type = "category"} :LoadingProps ) => {
  const Component = skeletonTypes[type];
  if(status === "pending"){
    return (
      <Component />
  )}
  if(status === "failed"){
    return <div className="grow flex items-center justify-center">
    <LootieHandler message={error as string} type="error" />
  </div>
  }
}

export default Loading