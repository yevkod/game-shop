import React, { useState } from "react";
import { Link } from "react-router-dom";
import cart from "../../assets/shopping-cart.svg";
import Bucket from "../Bucket/Bucket";

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };
  return (
    <div className="relative flex justify-between	items-center py-[20px] px-[10%]">
      <div>
        <p className="text-black font-bold text-[40px] cursor-pointer"><Link to="/">Store</Link></p>
      </div>
      <div className="relative inline-flex">
        <nav>
          <ul className="relative">
            <li className="inline-block py-0 px-[20px] text-[18px] border-b-2 border-transparent hover:border-black transition">
              <Link to="/">Home</Link>
            </li>
            <li className="inline-block py-0 px-[20px] text-[18px] border-b-2 border-transparent hover:border-black transition">
              <Link to="/">Shop</Link>
            </li>
            <li className="inline-block py-0 px-[20px] text-[18px] border-b-2 border-transparent hover:border-black transition">
              <Link to="/">Contacts</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <img onClick={openCart} className="block w-8 h-8 cursor-pointer" src={cart} alt="bucket" />
        <Bucket isOpen={isCartOpen} onClose={closeCart} />
      </div>
    </div>
  );
};

export default Header;
