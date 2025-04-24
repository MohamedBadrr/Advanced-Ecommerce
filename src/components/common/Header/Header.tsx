import { Link, NavLink, useNavigate } from "react-router-dom";
import Container from "../Container";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getCartTotalQuantity } from "@/store/selectors";
import { useEffect, useState } from "react";
import { PiListHeartLight } from "react-icons/pi";
import { authLogout } from "@/store/auth/authSlice";

const Header = () => {
  const TotalCartItems = useAppSelector(getCartTotalQuantity);
  const TotalWishlistItems = useAppSelector((state) => state.wishList.itemsId);
  const { accessToken, user } = useAppSelector((state) => state.auth.loginData);
  const [isAnimate, setIsAnimate] = useState(false);
  const dispatch = useAppDispatch();
  const pumpQuantityAnimate = isAnimate ? "pumpQuantity" : "";
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!TotalCartItems) return;
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
            <div className="flex gap-[5px]">
              <div
                className="relative flex cursor-pointer"
                onClick={() => navigate("/whishlist")}
              >
                {TotalWishlistItems.length > 0 ? (
                  <p
                    className={`${pumpQuantityAnimate} px-[5px] text-[12px] text-black bg-blue-400 rounded-[50%] absolute left-[10px] bottom-[25px]`}
                  >
                    {TotalWishlistItems.length}
                  </p>
                ) : null}
                <PiListHeartLight className="text-[25px] font-bold  mx-[5px]" />
                WishList
              </div>
              |
              <div
                className="relative flex cursor-pointer"
                onClick={() => navigate("/cart")}
              >
                {TotalCartItems > 0 ? (
                  <p
                    className={`${pumpQuantityAnimate} px-[5px] text-[12px] text-black bg-blue-400 rounded-[50%] absolute left-[6px] bottom-[25px]`}
                  >
                    {TotalCartItems}
                  </p>
                ) : null}
                <a href="#" className="text-blue-500 hover:text-blue-600">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
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
            <div className="flex items-center">
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

            <div className="flex items-center relative">
              {!accessToken ? (
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
              ) : (
                <div className="relative inline-block text-left">
                  <button
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm font-semibold text-white "
                    id="menu-button"
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                  >
                    {`Welcome : ${user.firstName}`}
                    <svg
                      className="-mr-1 size-5 text-white"
                      viewBox="0 0 20 20"
                      fill="white"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  {isOpen && (
                    <div className="absolute right-0 z-10 mt-5 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5">
                      <div className="">
                        <a
                          href="/profile"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                        >
                          Profile
                        </a>
                        <Link
                          to="profile/orders"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                        >
                          Orders
                        </Link>
                          <Link
                          onClick={()=>{dispatch(authLogout())}}
                            to="/"
                            className="block w-full px-4 py-2 text-left text-sm text-black hover:bg-red-500"
                          >
                            Logout
                          </Link>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </Container>
      </nav>
    </Container>
  );
};

export default Header;
