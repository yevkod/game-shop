import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Card = () => {
  return (
    <div>
      <Header />
      <div className="relative w-[900px] h-[630px] bg-gray rounded-[30px] my-16 mx-auto">
        <div className="flex w-[740px] h-[474px] mx-auto py-[95px]">
          <div className="block">
            <div>
              <p className="text-green font-bold text-[18px]">In Stock</p>
            </div>
            <div className="my-8">
              <p>Title</p>
              <p>Game Title</p>
              <p>Game Description</p>
            </div>
            <div className="my-[20px]">
              <p>Studio/Developer</p>
              <p>Product code: #12345</p>
            </div>
            <div className="mb-[20px]">
              <p>Quantity: 10 | RM 249.00 per copy</p>
            </div>
            <div>
              <button className="w-[445px] h-[42px] bg-blue-500 rounded-lg text-white">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="bg-gray w-[292px] h-[190px] rounded-[20px]"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Card;
