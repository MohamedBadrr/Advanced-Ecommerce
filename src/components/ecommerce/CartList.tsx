import { TProduct } from "@/CustomTypes";
import CartItem from "./CartItem";

type TCartListProps = {
  products: TProduct[];
  changeQuantityHandler: (id: number, quantity: number) => void;
  deleteItemHandler : (id:number)=>void
};
const CartList = ({ products, changeQuantityHandler , deleteItemHandler }: TCartListProps) => {
  return (
    <>
      {/* <CartList  /> */}
      {products.map((item, index) => {
        return (
          <CartItem
            id={item.id}
            key={index}
            img={item.img}
            title={item.title}
            quantity={item.quantity}
            max={item.max}
            price={item.price}
            changeQuantityHandler={changeQuantityHandler}
            deleteItemHandler = {deleteItemHandler}
          />
        );
      })}
    </>
  );
};

export default CartList;
