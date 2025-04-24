import Heading from "@/components/common/Heading/Heading";
import CartList from "@/components/ecommerce/Cart/CartList";
import CartSubtotalPrice from "@/components/ecommerce/Cart/CartSubtotalPrice";
import LootieHandler from "@/components/feedback/LootieHandler";
import useCart from "@/hooks/useCart";

const Cart = () => {
  const {
    changeQuantityHandler,
    deleteItemHandler,
    productCartList,
    userAccessToken,
    placeOrderLoading,
  } = useCart();
  return (
    <>
      {productCartList.length > 0 ? (
        <>
          <Heading title="Your Cart" />
          <CartList
            products={productCartList}
            deleteItemHandler={deleteItemHandler}
            changeQuantityHandler={changeQuantityHandler}
          />
          <CartSubtotalPrice
            userAccessToken={userAccessToken}
            products={productCartList}
          />
        </>
      ) : (
        <div className="mb-[40px]">
         {
          placeOrderLoading === "succeeded" ? 
          <LootieHandler type="success" message="Order placed successfully" /> :
          <LootieHandler type="empty" message="Your Cart is Empty" />
         }
        </div>
      )}
    </>
  );
};

export default Cart;
