import { NavLink, useNavigate } from "react-router-dom";
import Container from "../Container";
import { useAppSelector } from "@/store/hooks";
import { getCartTotalQuantity } from "@/store/selectors";
import { useEffect, useState } from "react";
import { PiListHeartLight } from "react-icons/pi";


const Header = () => {
  const TotalCartItems = useAppSelector(getCartTotalQuantity);
  const TotalWishlistItems = useAppSelector((state)=>state.wishList.itemsId);
  const [isAnimate, setIsAnimate] = useState(false);
  const pumpQuantityAnimate = isAnimate ? "pumpQuantity" : "";
  const navigate = useNavigate()
  useEffect(() => {
    if(!TotalCartItems) return;
    setIsAnimate(true);
    const timer = setTimeout(() => {
      setIsAnimate(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [TotalCartItems]);

  return (
    <Container>
     <nav className="bg-gray-800  ">
      <div className="bg-white mt-[18px]">
        <Container className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-[10px] flex justify-between ">
          <a href="#" className="text-xl font-bold text-blue-500">
            E-Commerce
          </a>
        <div className="flex gap-[5px]" >
        <div className="relative flex cursor-pointer" onClick={()=> navigate("/whishlist")}>
            {/* basket Orders */}
            {TotalWishlistItems.length > 0 ? <p className={`${pumpQuantityAnimate} px-[5px] text-[12px] text-black bg-blue-400 rounded-[50%] absolute left-[10px] bottom-[25px]`}>
              {TotalWishlistItems.length}  
            </p>: null}
            <PiListHeartLight className="text-[25px] font-bold  mx-[5px]"/>
            WishList
        </div>  
        
        | 

        <div className="relative flex cursor-pointer" onClick={()=> navigate("/cart")}>
            {/* basket Orders */}
            {TotalCartItems>0?<p className={`${pumpQuantityAnimate} px-[5px] text-[12px] text-black bg-blue-400 rounded-[50%] absolute left-[6px] bottom-[25px]`}>
              {TotalCartItems}  
            </p> : null}
            <a href="#" className="text-blue-500 hover:text-blue-600">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
                
              </svg>
            </a>
            Cart
        </div>
          </div>
          
        </Container>
      </div>
      <Container className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex justify-between h-16">
          {/* <!-- Logo and Links --> */}
          <div className="flex items-center">
            {/* <!-- Logo --> */}
            {/* <!-- Links (hidden on mobile) --> */}
            <div className="hidden md:flex md:space-x-4 ">
              <NavLink to="/" className="text-gray-200 hover:text-gray-400">
                Home
              </NavLink>
              <NavLink
                to="/categories"
                className="text-gray-200 hover:text-gray-400"
              >
                Categories
              </NavLink>
              <NavLink
                to="/about-us"
                className="text-gray-200 hover:text-gray-400"
              >
                About
              </NavLink>
            </div>
          </div>
          {/* <!-- Buttons and Shopping Cart --> */}
          <div className="flex items-center relative">
            {/* <!-- Shopping Cart Icon --> */}

            {/* <!-- Buttons (hidden on mobile) --> */}
            <div className="hidden md:flex md:space-x-2 md:ml-6">
              <NavLink
                to="/login"
                className="bg-blue-500 text-white hover:text-gray-200 px-3 py-1 rounded-md hover:bg-blue-600 transition-all duration-150"
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="bg-blue-500 text-white hover:text-gray-200 px-3 py-1 rounded-md hover:bg-blue-600 transition-all duration-150"
              >
                Register
              </NavLink>
            </div>
            {/* <!-- Mobile Menu Button --> */}
            <div className="md:hidden flex items-center">
              <button
                type="button"
                className="text-white hover:text-gray-400 focus:outline-none"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </Container>

      {/* <!-- Mobile Menu (hidden by default) --> */}
      <div className="md:hidden hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#" className="block text-gray-800 hover:text-gray-600">
            Home
          </a>
          <a href="#" className="block text-gray-800 hover:text-gray-600">
            About
          </a>
          <a href="#" className="block text-gray-800 hover:text-gray-600">
            Services
          </a>
          <a href="#" className="block text-gray-800 hover:text-gray-600">
            Login
          </a>
          <a href="#" className="block text-gray-800 hover:text-gray-600">
            Register
          </a>
        </div>
      </div>
    </nav>
    </Container>
  );
};

export default Header;
