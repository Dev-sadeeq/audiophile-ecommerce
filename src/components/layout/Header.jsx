import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faHeadphones,
  faVolumeHigh,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../../context/CartContext";
import CartModal from "../cart/CartModal";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { cartCount } = useCart();

  function openMenu() {
    setIsMenuOpen((prev) => !prev);
  }


  function openCartModal() {
    setIsCartOpen((prev) => !prev)
  }

  return (
    <>
      {isCartOpen ? <CartModal  onClose={() => setIsCartOpen(false)}/> : null}
      <header className="block md:hidden bg-black p-8">
        <div className="flex justify-between items-center">
          <div className="md:hidden">
            <button
              id="menu-btn"
              type="button"
              aria-label={openMenu}
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              onClick={openMenu}
            >
              <img src="/assets/shared/tablet/icon-hamburger.svg" alt="" />
            </button>
          </div>

          <div>
            <Link to="/">
              <img
                src="/assets/shared/desktop/logo.svg"
                alt="Audiophile-logo"
              />
            </Link>
          </div>

          <div>
            <button onClick={openCartModal}>
              <div className="relative">
                <span
                  className={`absolute bg-orange text-white text-xs font-bold rounded-full h-5 w-5 flex justify-center items-center -top-2 left-4 ${cartCount === 0 ? "hidden" : "flex"}`}
                >
                  {cartCount}
                </span>

                <img src="/assets/shared/desktop/icon-cart.svg" alt="cart" />
              </div>
            </button>
          </div>
        </div>

        <nav
          id="mobile-menu"
          className={`grid transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "grid-rows-[1fr] opacity-100 mt-6"
              : "grid-rows-[0fr] opacity-0 mt-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="flex flex-col gap-5 text-light-gray pb-4">
              <Link
                to="/"
                className="border rounded-md p-3 hover:text-hover-color"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex justify-between items-center">
                  HOME <FontAwesomeIcon icon={faHouse} />
                </span>
              </Link>
              <Link
                to="/headphones"
                className="border rounded-md p-3 hover:text-hover-color"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex justify-between items-center">
                  HEADPHONES <FontAwesomeIcon icon={faHeadphones} />
                </span>
              </Link>
              <Link
                to="/speakers"
                className="border rounded-md p-3 hover:text-hover-color"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex justify-between items-center">
                  SPEAKERS <FontAwesomeIcon icon={faVolumeHigh} />
                </span>
              </Link>
              <Link
                to="/earphones"
                className="border rounded-md p-3 hover:text-hover-color"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex justify-between items-center">
                  EARPHONES <FontAwesomeIcon icon={faHeadset} />
                </span>
              </Link>
            </div>
          </div>
        </nav>

        <hr className="border-gray-300/40 mt-6" />
      </header>

      <header className="hidden sticky top-0 z-40 md:block bg-black h-48 md:h-32 md:px-8 lg:px-24 xl:px-70 pt-10">
        <nav className="flex justify-between w-full text-white">
          <div>
            <Link to="/">
              <img src="/assets/shared/desktop/logo.svg" alt="logo" />
            </Link>
          </div>

          <div className="flex md:gap-x-8 lg:gap-x-14 text-light-gray">
            <Link to="/" className="font-semibold hover:text-hover-color focus:text-hover-color">
              HOME
            </Link>
            <Link to="/headphones" className="font-semibold hover:text-hover-color focus:text-hover-color">
              HEADPHONES
            </Link>
            <Link to="/speakers" className="font-semibold hover:text-hover-color focus:text-hover-color">
              SPEAKERS
            </Link>
            <Link to="/earphones" className="font-semibold hover:text-hover-color focus:text-hover-color">
              EARPHONES
            </Link>
          </div>
          <div>
            <button onClick={openCartModal}>
              <div className="relative">
                <span
                  className={`absolute bg-orange text-white text-xs font-bold rounded-full h-5 w-5 flex justify-center items-center -top-2 left-4 ${cartCount === 0 ? "hidden" : "flex"}`}
                >
                  {cartCount}
                </span>

                <img src="/assets/shared/desktop/icon-cart.svg" alt="cart" />
              </div>
            </button>
          </div>
        </nav>
        <hr className="border-gray-300/40 mt-10" />
      </header>
    </>
  );
}
