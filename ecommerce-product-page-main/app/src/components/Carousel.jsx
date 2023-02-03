import React, { useState } from "react";

function Carousel({ images }) {
  const [index, setIndex] = useState(0);

  function changeIndex(change) {
    setIndex((prev) => (prev + change + images.length) % images.length);
  }

  function chooseIndex(idx) {
    setIndex(idx);
  }

  return (
    <div className="w-full  relative mt-5">
      {/* Display image  */}
      <img
        src={images[index]}
        alt="Product image"
        className="max-h-[400px] object-cover w-full md:rounded-2xl"
      />
      {/* Navigation buttons -> next and prev (Only visible on small screen) */}
      <div className="md:hidden">
        <button
          className="  bg-white rounded-full font-extrabold flex justify-center items-center h-7 w-7 absolute top-[50%] left-2"
          onClick={() => {
            changeIndex(-1);
          }}
        >
          <img src="images/icon-previous.svg" alt="<" className="h-3" />
        </button>
        <button
          className="  bg-white rounded-full font-extrabold text-xl flex justify-center items-center h-7 w-7 absolute top-[50%] right-2"
          onClick={() => {
            changeIndex(1);
          }}
        >
          <img src="images/icon-next.svg" alt=">" className="h-3" />
        </button>
      </div>

      {/* Image Selector  */}
      <div className="hidden md:flex md:gap-x-2 mt-5">
        {images.map((elem, i) => (
          <div
            className={`
                    rounded-xl overflow-hidden relative cursor-pointer
                    ${
                      i === index
                        ? "border-orange-500 border-2 "
                        : "border-red-200"
                    }
            `}
            onClick={() => {
              chooseIndex(i);
            }}
          >
            <img src={elem} alt="" />
            {/* Overlay  */}
            {i === index && (
              <div className="absolute h-full w-full bg-white top-0 opacity-60"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// function NavButton({ children }) {
//   return (
//     <button className="  bg-white rounded-full font-extrabold text-xl flex justify-center items-center h-7 w-7">
//       {children}
//     </button>
//   );
// }

export default Carousel;
