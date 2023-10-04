import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Card from "../Card/Card";

const Main = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {

  return (
    <div>
      <Header />
      <div className="relative w-[1050px] mx-auto">
        <div className="relative bg-black w-[900px] h-[350px] rounded-[30px] mx-auto my-2"></div>
        <div className="flex justify-center items-center">
          <p className="px-auto text-[25px] py-[10px]">Our Products</p>
        </div>
        <div className="grid grid-cols-3 gap-10 place-items-center">
          <div className="flex-1 relative bg-black w-[295px] h-[200px] rounded-[30px] cursor-pointer">
            <p className="absolute bottom-[-24px]">Title</p>
            {/* <Card isOpen={isOpen} onClose={onClose}/> */}
          </div>
          <div className="flex-1 bg-black w-[295px] h-[200px] rounded-[30px] cursor-pointer">
            <div className="flex-1 relative bg-black w-[295px] h-[200px] rounded-[30px]">
              <p className="absolute bottom-[-24px]">Title</p>
            </div>
          </div>
          <div className="flex-1 bg-black w-[295px] h-[200px] rounded-[30px] cursor-pointer">
            <div className="flex-1 relative bg-black w-[295px] h-[200px] rounded-[30px]">
              <p className="absolute bottom-[-24px]">Title</p>
            </div>
          </div>
          <div className="flex-1 bg-black w-[295px] h-[200px] rounded-[30px]">
            <div className="flex-1 relative bg-black w-[295px] h-[200px] rounded-[30px]">
              <p className="absolute bottom-[-24px]">Title</p>
            </div>
          </div>
          <div className="flex-1 bg-black w-[295px] h-[200px] rounded-[30px]">
            <div className="flex-1 relative bg-black w-[295px] h-[200px] rounded-[30px]">
              <p className="absolute bottom-[-24px]">Title</p>
            </div>
          </div>
          <div className="flex-1 bg-black w-[295px] h-[200px] rounded-[30px]">
            <div className="flex-1 relative bg-black w-[295px] h-[200px] rounded-[30px]">
              <p className="absolute bottom-[-24px]">Title</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
