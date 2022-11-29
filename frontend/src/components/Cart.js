import React from "react";
import { TrashIcon } from "@heroicons/react/24/outline";

const Cart = () => {
  return (
    <div className=" absolute right-6 w-1/4 flex flex-col gap-4 z-50 bg-white p-2">
      <h1 className="text-gray-400 text-lg">Products in your cart</h1>
      <div>
        <div className="flex items-center gap-4">
          <img
            src="https://assets.burberry.com/is/image/Burberryltd/587CBED2-693F-49C6-BF55-542BDD7B5BF0?$BBY_V2_ML_1x1$&wid=2500&hei=2500"
            alt=""
            className="w-[80px] h-[100px] object-cover"
          />
          <div className="flex flex-col gap-4">
            <h2 className="text-gray-400">Long Sleeve Graphic T-shirt</h2>
            <p className="text-sm text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
              numquam distinctio error explicabo tempora fugit similique. Unde
              quasi ad necessitatibus?
            </p>
            <p className="text-blue-500"> 1 x $19.9</p>
          </div>
          <div>
            <TrashIcon className="w-5 text-red-500 cursor-pointer" />
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-4">
          <img
            src="https://assets.burberry.com/is/image/Burberryltd/587CBED2-693F-49C6-BF55-542BDD7B5BF0?$BBY_V2_ML_1x1$&wid=2500&hei=2500"
            alt=""
            className="w-[80px] h-[100px] object-cover"
          />
          <div className="flex flex-col gap-4">
            <h2 className="text-gray-400">Long Sleeve Graphic T-shirt</h2>
            <p className="text-sm text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
              numquam distinctio error explicabo tempora fugit similique. Unde
              quasi ad necessitatibus?
            </p>
            <p className="text-blue-500"> 1 x $19.9</p>
          </div>
          <div>
            <TrashIcon className="w-5 text-red-500 cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between font-semibold">
        <span className=" uppercase">Subtotal</span>
        <span>$39.8</span>
      </div>
      <button className="p-2 bg-blue-500 uppercase text-white font-semibold hover:bg-blue-700 w-1/2 text-sm">
        process to checkout
      </button>
      <span className="text-sm text-red-500 cursor-pointer capitalize">
        Reset cart
      </span>
    </div>
  );
};

export default Cart;
