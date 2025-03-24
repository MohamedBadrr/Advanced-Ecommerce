import React from "react"
import ContentLoader from "react-content-loader"

const ProductSkeleton = () => (
  <ContentLoader 
    speed={2}
    width={400}
    height={365}
    viewBox="0 0 400 365"
    backgroundColor="#e0e0e0"
    foregroundColor="#f5f5f5"
  >
    <rect x="57" y="35" rx="0" ry="0" width="150" height="189" /> 
    <rect x="64" y="232" rx="5" ry="5" width="137" height="11" /> 
    <rect x="83" y="252" rx="5" ry="5" width="91" height="7" /> 
    <rect x="76" y="268" rx="5" ry="5" width="111" height="6" /> 
    <rect x="61" y="283" rx="0" ry="0" width="145" height="15" />
  </ContentLoader>
)

export default ProductSkeleton