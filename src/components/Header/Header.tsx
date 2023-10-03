import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="relative flex justify-between	items-center py-[20px] px-[10%]">
      <div>
        <p className="text-black font-bold text-[40px]">Store</p>
      </div>
      <div className="relative inline-flex">
        <nav>
          <ul className="relative">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Shop</Link></li>
            <li><Link to="/">Contacts</Link></li>
          </ul>
        </nav>
      </div>
      <div>
        <img src="" alt="bucket"/>
      </div>
    </div>
  );
};

export default Header;
