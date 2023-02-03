import React, { useState } from "react";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  function handleToggle() {
    console.log("Toggle menu");
    setToggleMenu((prev) => !prev);
  }
  return (
    <div className="relative flex flex-row items-center px-4 bg-orange-100 md:px-0 ">
      <div className="flex gap-x-4">
        {/* Hamburger Menu  */}
        <div className="md:hidden justify-self-start">
          <button onClick={handleToggle}>
            <img src="images/icon-menu.svg" alt="" />
          </button>
        </div>

        {/* Logo  */}
        <div>
          <img src="images/logo.svg" alt="sneakers" />
        </div>
      </div>

      {/* Items  */}
      <div
        className={
          toggleMenu
            ? "flex absolute top-0 left-0 flex-col w-8/12 min-h-screen pl-5 font-bold bg-slate-200 gap-y-5 "
            : "hidden" +
              "  md:bg-transparent md:relative md:flex md:flex-row md:min-h-full md:gap-x-2 md:font-normal md:text-gray-500 md:ml-4"
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
          <img src="images/icon-cart.svg" alt="" />
        </button>

        {/* Avatar  */}
        <button type="button h-5">
          <img src="images/image-avatar.png" alt="" className="h-10" />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
