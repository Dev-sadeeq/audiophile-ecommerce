import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import OrderConfirmationModal from "../components/common/OrderConfirmationModal";
import { Navigate } from "react-router-dom";

export default function Checkout() {
  const { cart, subTotal, formatPrice, formatCartName } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("");
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  if (cart.length === 0 && !orderConfirmed) {
    return <Navigate to="/" replace />;
  }

  const shipping = 50;
  const vat = subTotal * 0.2;
  const grandTotal = subTotal + shipping + vat;

  function handleSubmit(e) {
    e.preventDefault();
    setOrderConfirmed(true);
  }

  return (
    <>
      <main className="max-w-360 mx-auto px-6 sm:px-8 md:px-12 lg:px-24 space-y-12">
        <div className="my-16">
          <Link to="/">Go back</Link>{" "}
        </div>
        <section>
          <section className="md:flex md:items-start md:gap-x-6">
            <div className="rounded-xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] px-10 pt-7 pb-16 md:w-full">
              <h1 className="text-2xl text-Dark font-bold uppercase my-6 tracking-[0.075em]">
                Checkout
              </h1>
              <form id="checkout-form" onSubmit={handleSubmit}>
                <h2 className="text-orange font-semibold mb-7 uppercase">
                  Billing details
                </h2>
                <div className="space-y-7 md:flex md:gap-x-4">
                  <div className="w-full">
                    <label className="block mb-3 font-bold" htmlFor="name">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Sadeeq Yahaya"
                      required
                      className="w-full border-2 border-gray-500 p-4 rounded-lg focus:border-orange focus:outline-hidden"
                    />
                  </div>

                  <div className="w-full">
                    <label className="block mb-3 font-bold" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="sadeeqyahaya888@gmail.com"
                      required
                      className="w-full border-2 border-gray-500 p-4 rounded-lg focus:border-orange focus:outline-hidden"
                    />
                  </div>
                </div>

                <label className="block mb-3 mt-7 font-bold" htmlFor="tel">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="tel"
                  placeholder="+2347013929462"
                  required
                  className="w-full md:w-1/2 border-2 border-gray-500 p-4 rounded-lg focus:border-orange focus:outline-hidden"
                />

                <h2 className="text-orange font-semibold mb-4 mt-10 uppercase">
                  Shipping info
                </h2>
                <div className="space-y-7">
                  <label className="block mb-3 font-bold" htmlFor="address">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="No1thompsonstreetlagos"
                    required
                    className="w-full border-2 border-gray-500 p-4 rounded-lg focus:border-orange focus:outline-hidden"
                  />

                  <div className="space-y-7 md:flex md:gap-x-4">
                    <div className="w-full">
                      <label className="block mb-3 font-bold" htmlFor="zip">
                        Zip Code
                      </label>
                      <input
                        type="text"
                        name="zip"
                        id="zip"
                        inputMode="numeric"
                        placeholder="10010"
                        required
                        className="w-full border-2 border-gray-500 p-4 rounded-lg focus:border-orange focus:outline-hidden"
                      />
                    </div>

                    <div className="w-full">
                      <label className="block mb-3 font-bold" htmlFor="city">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        placeholder="Lagos"
                        required
                        className="w-full border-2 border-gray-500 p-4 rounded-lg focus:border-orange focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <label className="block mb-3 font-bold" htmlFor="country">
                    Country
                  </label>
                  <input
                    type="text"
                    name="country"
                    id="country"
                    placeholder="Nigeria"
                    required
                    className="w-full md:w-1/2 border-2 border-gray-500 p-4 rounded-lg focus:border-orange focus:outline-hidden"
                  />
                </div>

                <h2 className="text-orange font-semibold mb-4 mt-10 uppercase">
                  Payment details
                </h2>
                <div>
                  <fieldset className="border-0 p-0 m-0 min-w-0">
                    <div className="md:flex md:justify-between">
                      <legend className="mb-5 font-bold p-0 float-left md:float-none">
                        Payment method
                      </legend>
                      <div className="clear-both md:clear-none flex flex-col gap-y-7 md:w-1/2">
                        <label
                          htmlFor="e-money"
                          className={`flex items-center w-full border-2 p-4 rounded-lg cursor-pointer transition-colors ${
                            paymentMethod === "e-money"
                              ? "border-orange"
                              : "border-gray-500"
                          }`}
                        >
                          <input
                            type="radio"
                            id="e-money"
                            name="paymentMethod"
                            value="e-money"
                            checked={paymentMethod === "e-money"}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            required
                            className="w-5 h-5 accent-orange"
                          />
                          <span className="ml-3 font-bold">e-Money</span>
                        </label>

                        <label
                          htmlFor="cash"
                          className={`flex items-center w-full border-2 p-4 rounded-lg cursor-pointer transition-colors ${
                            paymentMethod === "cash on delivery"
                              ? "border-orange"
                              : "border-gray-500"
                          }`}
                        >
                          <input
                            type="radio"
                            id="cash"
                            name="paymentMethod"
                            value="cash on delivery"
                            required
                            checked={paymentMethod === "cash on delivery"}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            className="w-5 h-5 accent-orange"
                          />
                          <span className="ml-3 font-bold">
                            Cash On Delivery
                          </span>
                        </label>
                      </div>
                    </div>
                  </fieldset>
                  {paymentMethod === "e-money" && (
                    <div className="space-y-7 mt-5 md:flex md:gap-x-4">
                      <div className="w-full">
                        <label
                          className="block mb-3 font-bold"
                          htmlFor="number"
                        >
                          e-Money Number
                        </label>
                        <input
                          type="tel"
                          id="number"
                          name="number"
                          placeholder="123456789"
                          required
                          className="w-full border-2 border-gray-500 p-4 rounded-lg focus:border-orange focus:outline-hidden"
                        />
                      </div>

                      <div className="w-full">
                        <label className="block mb-3 font-bold" htmlFor="pin">
                          e-money Pin
                        </label>
                        <input
                          type="tel"
                          name="pin"
                          id="pin"
                          placeholder="6789"
                          required
                          className="w-full border-2 border-gray-500 p-4 rounded-lg focus:border-orange focus:outline-hidden"
                        />
                      </div>
                    </div>
                  )}

                  {paymentMethod === "cash on delivery" && (
                    <div className="mt-8 flex flex-col justify-center items-center gap-y-4 sm:flex-row sm:gap-x-5 md:items-center">
                      <img
                        src="/cashondelivery.png"
                        alt="cash on delivery"
                        className="w-16 h-16"
                      />
                      <p className="text-gray-600 leading-7">
                        The ‘Cash on Delivery’ option enables you to pay in cash
                        when our delivery courier arrives at your residence.
                        Just make sure your address is correct so that your
                        order will not be cancelled.
                      </p>
                    </div>
                  )}
                </div>
              </form>
            </div>

            <div className="mt-16 rounded-xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] px-10 pt-10 pb-16 md:w-1/2 md:mt-0 md:pb-6 md:px-5 lg:px-10">
              <h3 className="font-semibold uppercase my-7">Summary</h3>
              <div className="mb-7 space-y-6">
                {cart.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="flex justify-between items-center gap-x-3"
                    >
                      <div className="flex gap-x-3 items-center">
                        <img
                          src={item.image.mobile}
                          alt=""
                          className="w-16 h-16 rounded-md shrink-0"
                        />

                        <div className="flex flex-col items-start min-w-0">
                          <span className="font-bold">
                            {formatCartName(item.name)}
                          </span>
                          <span className="text-gray-600 font-semibold">
                            {formatPrice(item.price)}
                          </span>
                        </div>
                      </div>

                      <div>
                        <span className="text-gray-500">x{item.quantity}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 uppercase">Total</span>
                  <span className="font-bold">{formatPrice(subTotal)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 uppercase">Shipping</span>
                  <span className="font-bold">{formatPrice(shipping)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 uppercase">vat(included)</span>
                  <span className="font-bold">{formatPrice(vat)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 uppercase">Grand total</span>
                  <span className="text-orange font-semibold">
                    {formatPrice(grandTotal)}
                  </span>
                </div>
              </div>

              <div className=" bg-orange flex justify-center items-center p-4 my-10">
                <button
                  form="checkout-form"
                  disabled={cart.length < 1}
                  type="submit"
                  className={`uppercase text-white font-bold ${
                    cart.length < 1
                      ? "bg-orange-300 opacity-50 cursor-not-allowed"
                      : "cursor-pointer"
                  }`}
                >
                  continue & pay
                </button>
              </div>
            </div>
          </section>
          {orderConfirmed && (
            <OrderConfirmationModal cart={cart} grandTotal={grandTotal} />
          )}
        </section>
      </main>
    </>
  );
}
