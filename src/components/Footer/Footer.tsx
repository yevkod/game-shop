import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="relative flex justify-between border-y-2 mt-[80px] mb-3 h-[300px] px-12">
      <div className="relative flex justify-center items-center">
        <div className="block">
        <p className="text-[30px]">Store</p>
        <p className="text-[18px] mt-3">
          400 University Drive Suite 200 Coral Gables, FL 33134 USA
        </p>
        </div>
      </div>
      <div className="relative flex justify-center items-center">
        <nav>
          <ul className="relative">
            <li className="row  px-[20px] text-[18px] border-b-2 border-transparent hover:border-black transition">
              <Link to="/">Home</Link>
            </li>
            <li className="row pt-4 px-[20px] text-[18px] border-b-2 border-transparent hover:border-black transition">
              <Link to="/">Shop</Link>
            </li>
            <li className="row pt-4 px-[20px] text-[18px] border-b-2 border-transparent hover:border-black transition">
              <Link to="/">Contacts</Link>
            </li>
            <li className="row pt-4 px-[20px] text-[18px] border-b-2 border-transparent hover:border-black transition">
              <Link to="/">Help</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="relative flex justify-center items-center">
        <nav>
          <ul className="relative">
            <li className="row  px-[20px] text-[18px] border-b-2 border-transparent hover:border-black transition">
              <Link to="/">Payment Options</Link>
            </li>
            <li className="row pt-4 px-[20px] text-[18px] border-b-2 border-transparent hover:border-black transition">
              <Link to="/">Returns</Link>
            </li>
            <li className="row pt-4 px-[20px] text-[18px] border-b-2 border-transparent hover:border-black transition">
              <Link to="/">Privacy Policies</Link>
            </li>
            <li className="row pt-4 px-[20px] text-[18px] border-b-2 border-transparent hover:border-black transition">
              <Link to="/">Links</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
