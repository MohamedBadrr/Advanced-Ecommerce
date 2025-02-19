import { TProduct } from '@/CustomTypes'

const CartSubtotalPrice = ({products} : {products : TProduct[]}) => {
  const totalPrice = products.reduce((acc,item)=>{
    const price = item.price;
    const quantity = item.quantity
    return acc + price* (quantity ?? 0)
  },0)
  return (
    <>
        <div className='flex items-center justify-between mb-[10px]'>
            <h1 className='text-[20px] font-bold'>Subtotal:</h1>
            <h1 className='text-[20px] font-bold'>{totalPrice.toFixed(2)}</h1>
        </div>
    </>
  )
}

export default CartSubtotalPrice