import React from "react";
import cross from "../../assets/cross.png";

const Bucket = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const handleBackgroundClick = () => {
    onClose();
  };
  return (
    <div className="relative z-50">
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black opacity-20 z-40"
            onClick={handleBackgroundClick}
          ></div>
          <div className="absolute block right-[15px] w-[390px] h-[380px] bg-gray z-50">
            <div className="relative h-[340px]">
              <div className="flex w-[330px] mx-auto my-3 justify-center border-b-2">
                <p className="text-[30px] font-bold">Shopping Cart</p>
                <button onClick={onClose} className="flex">
                  <img
                    className="block absolute right-8 top-2 w-8 h-8"
                    src={cross}
                    alt="close"
                  />
                </button>
              </div>
              <div className="flex absolute bottom-0 px-8 justify-between items-center">
                <div className="flex justify-between items-center">
                  <div className="flex justify-between items-center">
                    <p>Subtotal</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p>0.00</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <button>Cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Bucket;
