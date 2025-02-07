import { TCategory } from "@/CustomTypes";
import { Link } from "react-router-dom";

const Category = ({ img, prefix, title }: TCategory) => {
  return (
    <Link
      to={`/products/${title}`}
      className=" flex items-center flex-col mb-[25px]"
    >
      <div className="w-[150px] h-[150px] rounded-[50%] bg-gray-100">
        <img
          src={img}
          alt={title}
          className="w-[150px] h-[150px] rounded-[50%]"
        />
      </div>
      <h1 className="mt-[20px] font-bold text-[18px]">{prefix}</h1>
    </Link>
  );
};

export default Category;
