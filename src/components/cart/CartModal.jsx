import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import QuantityCounter from "../common/QuantityCounter";
import { getImageUrl } from "../../utils/getImage";

export default function CartModal({ onClose }) {
  const { cart, cartCount, subTotal, formatPrice, formatCartName, handleAdd, handleSub, removeAll } =
    useCart();

  const emptyCartView = (
    <div className="fixed top-28 left-0 right-0 sm:left-auto sm:right-32 bg-white z-50  max-sm:w-full sm:w-105 max-h-[85vh] overflow-y-auto rounded-lg shadow-xl p-10">
      <div className="flex justify-between">
        <span className="font-semibold text-xl">Cart ({cartCount})</span>
        <button disabled={true} className="underline hover:text-orange cursor-pointer">
          Remove all
        </button>
      </div>

      <div className="flex justify-center items-center my-8">
        <img src="/cart-empty.gif" alt="Empty Cart" width="200" height="200" />
      </div>

      <div className="flex justify-between">
        <span className="text-gray-500 uppercase">Total</span>
        <span className="font-semibold text-xl">{formatPrice(subTotal)}</span>
      </div>

      <div className="bg-Dark p-5 my-7">
        <p className="upperCase text-white text-center font-bold">
          No items in the list
        </p>
      </div>
    </div>
  );

  const filledCartView = (
    <div className="fixed top-28 left-0 right-0 sm:left-auto sm:right-32 bg-white z-50  max-sm:w-full sm:w-105 max-h-[85vh] overflow-y-auto rounded-lg shadow-xl p-10">
      <div className="flex justify-between">
        <span className="font-semibold text-xl">Cart ({cartCount})</span>
        <button onClick={removeAll} className="underline hover:text-orange cursor-pointer">
          Remove all
        </button>
      </div>

      <div className="my-10">
        {cart.map((item) => {
          return (
            <div
              key={item.id}
              className="flex justify-between items-center gap-x-3"
            >
              <div className="flex gap-x-3 items-center">
                <div className="w-16 h-16 bg-gray-100 mb-5 rounded-lg overflow-hidden shrink-0 flex items-center justify-center">
                  <img
                    src={getImageUrl(item.image.mobile)}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-col items-start">
                  <span className="font-bold">{formatCartName(item.name)}</span>
                  <span className="text-gray-600 font-semibold">
                    {formatPrice(item.price)}
                  </span>
                </div>
              </div>

              <div>
                <QuantityCounter
                  count={item.quantity}
                  handleAdd={() => handleAdd(item)}
                  handleSub={() => handleSub(item)}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-between">
        <span className="text-gray-500 uppercase">Total</span>
        <span className="font-semibold text-xl">{formatPrice(subTotal)}</span>
      </div>

      <div className=" bg-orange flex justify-center items-center p-4 my-7">
        <Link onClick={onClose} to="/checkout" className="uppercase text-white font-bold">
          checkout
        </Link>
      </div>
    </div>
  );

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            onClose();
          }
        }}
      ></div>
      <div className="px-10">
        {cart.length === 0 ? emptyCartView : filledCartView}
      </div>
    </>
  );
}
