import React from "react";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { resetCart, removeFromCart } from "../redux/cartReducer";
import { stripeKey, uploadUrl } from "../utils/url";
import { loadStripe } from "@stripe/stripe-js";
import { makeRequest } from "../utils/makeRequest";

const Cart = () => {
  const { products } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const stripePromise = loadStripe(stripeKey);

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => (total += item.quantity * item.price));
    return total.toFixed(2);
  };

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post("/orders", {
        products,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" absolute right-6 w-1/4 flex flex-col gap-4 z-50 bg-white p-2">
      <h1 className="text-gray-400 text-lg">Products in your cart</h1>
      {products?.map((product) => (
        <div key={product.id}>
          <div className="flex items-center gap-4">
            <img
              src={uploadUrl + product.img}
              alt=""
              className="w-[80px] h-[100px] object-cover"
            />
            <div className="flex flex-col gap-4">
              <h2 className="text-gray-400 capitalize">{product.title}</h2>
              <p className="text-sm text-gray-300">{product.desc}</p>
              <p className="text-blue-500">
                {product.quantity} x ${product.price.toFixed(2)}
              </p>
            </div>
            <div>
              <TrashIcon
                className="w-5 text-red-500 cursor-pointer"
                onClick={() => dispatch(removeFromCart(product.id))}
              />
            </div>
          </div>
        </div>
      ))}
      <div className="flex items-center justify-between font-semibold">
        <span className=" uppercase">Subtotal</span>
        <span>${totalPrice()}</span>
      </div>
      <button
        className="p-2 bg-blue-500 uppercase text-white font-semibold hover:bg-blue-700 w-1/2 text-sm"
        onClick={handlePayment}
      >
        process to checkout
      </button>
      <span
        className="text-sm text-red-500 cursor-pointer capitalize"
        onClick={() => dispatch(resetCart())}
      >
        Reset cart
      </span>
    </div>
  );
};

export default Cart;
