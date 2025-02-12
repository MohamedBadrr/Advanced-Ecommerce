import { memo } from "react";

//  import { TProduct } from "@/CustomTypes";
type TCartItemProps = {
  id: number;
  img: string;
  title: string;
  price: number;
  quantity?: number;
  max: number;
  changeQuantityHandler: (id: number, quantity: number) => void;
  deleteItemHandler : (id:number)=> void
};
const CartItem = memo(({
  id,
  img,
  title,
  price,
  quantity,
  max,
  changeQuantityHandler,
  deleteItemHandler
}: TCartItemProps) => {
  const valueOptions = Array(max)
    .fill(0)
    .map((_, number) => {
      const quantity = ++number;
      return (
        <option value={quantity} key={quantity}>
          {quantity}
        </option>
      );
    });

  const changeQuantity = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newQuantity = +event.target.value;
    changeQuantityHandler(id, newQuantity);
  };


  return (
    <>
      <div className="flex justify-between items-center pb-[10px] border-b-2 border-gray-300 mb-[15px]">
        <div className="flex">
          <img src={img} className="w-[60px] md:w-[120px] rounded-sm h-[75px] md:h-[155px]" alt="" />
          <div className="flex flex-col justify-between p-[10px]">
            <div >
              <h1 className=" text-[15px] font-bold">{title}</h1>
              <p className="my-[5px] text-[15px] ">
                <strong>{price}</strong> EGP
              </p>
            </div>
            <button onClick={()=>{deleteItemHandler(id)}} className="w-[100px] h-[30px] rounded-md bg-red-600 text-white hover:bg-red-400 transition-all duration-300">
              Remove
            </button>
          </div>
        </div>
        <div>
          <p className="pb-[10px] font-semibold">Quantity</p>
          <select
            value={quantity}
            onChange={changeQuantity}
            className=" py-[5px] px-[15px] cursor-pointer focus:shadow-lg border-[1px] border-black rounded-md outline-none"
            name=""
            id=""
          >
            {valueOptions}
          </select>
        </div>
      </div>
    </>
  );
});

export default CartItem;
