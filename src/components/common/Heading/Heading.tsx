
import { memo } from "react"

const Heading = memo(({title} : {title : string}) => {
  return (
    <h1 className=" my-[30px] text-[28px] font-bold text-gray-700">{title}</h1>
  )
});

export default Heading