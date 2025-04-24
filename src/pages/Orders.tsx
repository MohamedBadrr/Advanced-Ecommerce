import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { actGetOrders } from "@/store/orders/ordersSlice";
import { useEffect } from "react";

const Orders = () => {
  const {orders} = useAppSelector((state) => state.orders)
  console.log(orders);
  
  const dispatch = useAppDispatch()

  useEffect(()=>{
    const promise = dispatch(actGetOrders())
    return () => {
      promise.abort()
    }
  },[dispatch])
  return (
    <div className="w-full ">
    <h1 className="text-[40px] font-semibold mb-5">Orders</h1>

      {/* table */}

        <div >
        <table className="w-full border-collapse border text-center border-gray-300 my-5">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Order Number</th>
            <th className="border border-gray-300 px-4 py-2">Items</th>
            <th className="border border-gray-300 px-4 py-2">Total Price</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">{order.id}</td>
                <td className="border border-gray-300 px-4 py-2">{order.items.length} {"Items"} :   
                  <ul className="text-center flex flex-col items-center justify-center mt-3"> 
                    {order.items.map((item) => (
                      <li key={item.id} className="text-left">
                        {item.title} : {item.price} {"EGP"}
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="border border-gray-300 px-4 py-2">{order.subTotal}  {"EGP"}</td>
              </tr>
          ))}
       </tbody>
      </table>
        </div>
    </div>
  )
}

export default Orders