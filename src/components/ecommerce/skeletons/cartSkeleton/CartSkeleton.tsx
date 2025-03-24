import React from "react"
import ContentLoader from "react-content-loader"

const CartSkeleton = () => (
<ContentLoader 
    speed={2}
    width={400}
    height={365}
    viewBox="0 0 400 365"
    backgroundColor="#e0e0e0"
    foregroundColor="#f5f5f5"
  >
    <rect x="10" y="36" rx="0" ry="0" width="119" height="189" /> 
    <rect x="134" y="59" rx="3" ry="3" width="137" height="11" /> 
    <rect x="135" y="79" rx="5" ry="5" width="91" height="7" /> 
    <rect x="136" y="196" rx="3" ry="3" width="133" height="14" />
  </ContentLoader>
)

export default CartSkeleton