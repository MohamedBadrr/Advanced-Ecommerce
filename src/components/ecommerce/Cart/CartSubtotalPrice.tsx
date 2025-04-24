import { TProduct } from "@/CustomTypes";
import { cartRemoveItemsAfterPlaceOrder } from "@/store/cart/cartSlice";
import { useAppDispatch } from "@/store/hooks";
import { actPlaceOrder } from "@/store/orders/ordersSlice";
import { useState } from "react";

type CartSubtotalPriceProps = {
  products: TProduct[];
  userAccessToken: string;
};
const CartSubtotalPrice = ({
  products,
  userAccessToken,
}: CartSubtotalPriceProps) => {
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const totalPrice = products.reduce((acc, item) => {
    const price = item.price;
    const quantity = item.quantity;
    return acc + price * (quantity ?? 0);
  }, 0);

  const placeOrderHandler = async () => {
    setLoading(true);
    dispatch(actPlaceOrder(totalPrice))
      .unwrap()
      .then(()=>{
        dispatch(cartRemoveItemsAfterPlaceOrder())
      }) 
      .catch(()=>{
        setError("Failed to place order");
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <div className="flex items-center justify-between mb-[10px]">
        <h1 className="text-[20px] font-bold">Subtotal:</h1>
        <div className="flex items-center justify-center  flex-col">
          <h1 className="text-[20px] font-bold">{totalPrice.toFixed(2)}</h1>
          {userAccessToken && (
            <button
              className="bg-blue-500 px-4 py-2 rounded-md text-white"
              onClick={placeOrderHandler}
            >
             {
              loading ? "Loading..." : "Place Order"
             }
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default CartSubtotalPrice;
