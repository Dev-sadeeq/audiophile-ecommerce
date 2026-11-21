import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { getImageUrl } from "../../utils/getImage";

export default function OrderConfirmationModal({ cart, grandTotal }) {
  const { removeAll, formatPrice, formatCartName } = useCart();

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"></div>
      <div className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl w-[calc(100%-2rem)] max-w-lg max-h-[90vh] overflow-y-auto p-8">
        <div>
          <div>
            <img
              src="/succesful.png"
              alt="order succesful image"
              className="w-24 h-24"
            />
          </div>
          <div>
            <h1 className="font-bold text-3xl mt-2 mb-6">
              Thank you for your order
            </h1>

            <p className="text-gray-600">
              You will receive an email confirmation shortly.
            </p>
          </div>
          <div className="my-10">
            <div className="flex flex-col md:flex-row bg-gray-300 rounded-xl overflow-hidden">
              <div className="flex-1 p-5 space-y-4">
                {cart.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="flex items-center justify-between gap-x-3"
                    >
                      <div className="flex gap-x-3 items-center">
                        <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden shrink-0 flex items-center justify-center">
                          <img
                            src={getImageUrl(item.image.mobile)}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="flex flex-col items-start">
                          <span className="font-bold">
                            {formatCartName(item.name)}
                          </span>
                          <span className="text-gray-600 font-semibold">
                            {formatPrice(item.price)}
                          </span>
                        </div>
                      </div>

                      <div>
                        <span className="text-gray-600 font-bold">
                          x{item.quantity}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="bg-Dark flex flex-col justify-end gap-y-2 p-6 md:w-48 shrink-0">
                <span className="text-gray-500 uppercase text-sm">
                  grand Total
                </span>
                <span className="text-white font-bold text-lg">
                  {formatPrice(grandTotal)}
                </span>
              </div>
            </div>

            <div className=" bg-orange flex justify-center items-center p-4 my-7">
              <Link
                to="/"
                onClick={removeAll}
                className="uppercase text-white font-bold"
              >
                back to home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
