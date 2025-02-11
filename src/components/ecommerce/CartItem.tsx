
const CartItem = () => {
  return (
    <>
        <div className='flex justify-between items-center pb-[10px] border-b-2 border-gray-300 mb-[15px]'>
            <div className='flex'>
                <img src="https://picsum.photos/200/300" className='w-[120px] rounded-sm h-[155px]' alt="" />
                <div  className='flex flex-col justify-between p-[10px]'>
                    <div>
                        <h1 className='text-[15px] font-bold'>Name</h1>
                        <p className='text-[15px] '><strong>320</strong> EGP</p>
                    </div>
                    <button className='w-[100px] h-[30px] rounded-md bg-red-600 text-white hover:bg-red-400 transition-all duration-300'>Remove</button>
                </div>
            </div>
            <div>
                <p className='pb-[10px] font-semibold'>Quantity</p>
                <select className='py-[5px] px-[15px] cursor-pointer focus:shadow-lg border-[1px] border-black rounded-md outline-none' name="" id="">
                    <option value="1">1</option>
                    <option value="1">2</option>
                    <option value="1">3</option>
                </select>
            </div>
        </div>  
    </>
  )
}

export default CartItem