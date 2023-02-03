import React, { useState } from "react";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  function handleToggle() {
    console.log("Toggle menu");
    setToggleMenu((prev) => !prev);
  }
  return (
    <div className="relative flex flex-row items-center px-4 md:px-0  border-b-2">
      <div className="flex gap-x-4">
        {/* Hamburger Menu  */}
        <div className="md:hidden justify-self-start">
          <button onClick={handleToggle}>
            <img src="images/icon-menu.svg" alt="" />
          </button>
        </div>

        {/* Logo  */}
        <div>
          <img src="images/logo.svg" alt="sneakers" className="md:h-4" />
        </div>
      </div>

      {/* Items  */}
      <div
        className={
          toggleMenu
            ? "flex absolute top-0 left-0 flex-col w-8/12 min-h-screen pl-5 font-bold bg-slate-200 gap-y-5 z-10"
            : "hidden" +
              "  md:bg-transparent md:relative md:flex md:flex-row md:min-h-full md:gap-x-2 md:font-normal md:text-gray-500 md:ml-4 md:text-sm"
        }
      >
        <button
          className={"mt-5 mb-10 " + (!toggleMenu ? "hidden" : "inline")}
          onClick={handleToggle}
        >
          <img src="images/icon-close.svg" alt="" />
        </button>
        <div>Collections</div>
        <div>Men</div>
        <div>Women</div>
        <div>About</div>
        <div>Contact</div>
      </div>

      <div className="flex ml-auto gap-x-4">
        {/* Cart  */}
        <button type="button">
          <img src="images/icon-cart.svg" alt="" className="" />
        </button>

        {/* Avatar  */}
        <button
          type="button"
          className="bg-orange-500 rounded-full border-2 hover:border-orange-500"
        >
          <img src="images/image-avatar.png" alt="Avatar" className="h-10" />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
