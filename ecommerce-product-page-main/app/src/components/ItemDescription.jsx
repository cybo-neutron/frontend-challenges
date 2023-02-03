import React from "react";

function ItemDescription() {
  return (
    <div className={"mt-4 mx-6 flex flex-col justify-center " + ""}>
      <div className="text-sm font-bold text-orange-400 uppercase">
        Company name
      </div>
      <div className="mt-1 text-3xl font-bold">
        Fall Limited Edition Sneakers
      </div>
      <div className="mt-2 text-sm text-gray-500 md:mt-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde minima
        aspernatur voluptas. Voluptas iusto voluptatem dicta libero, nam animi
        commodi.
      </div>
      <div className="flex mt-4 flex-row md:flex-col">
        <div className="flex">
          <div className="text-2xl font-bold">$125.00</div>
          <div className="self-center px-1 ml-3 font-bold text-orange-400 bg-orange-100 rounded-md w-fit">
            50%
          </div>
        </div>
        <div className="ml-auto md:ml-0 font-bold text-gray-400 line-through">
          $250.00
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="flex items-center justify-between flex-grow mx-5 mt-5 text-xl font-bold">
          <button className="flex-1 text-orange-600 bg-zinc-100 hover:bg-zinc-200 rounded-md">
            -
          </button>
          <div className="flex-1 text-center">0</div>
          <button className="flex-1 text-orange-600 bg-zinc-100 hover:bg-zinc-200  rounded-md">
            +
          </button>
        </div>
        <button className="flex items-center justify-center flex-grow py-3 mt-5 font-bold text-white bg-orange-500 rounded-lg">
          <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="white"
              fill-rule="nonzero"
            />
          </svg>
          <div className="ml-2">Add to cart</div>
        </button>
      </div>
    </div>
  );
}

export default ItemDescription;
