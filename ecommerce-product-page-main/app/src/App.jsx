import Carousel from "./components/Carousel";
import ItemDescription from "./components/ItemDescription";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="md:px-10">
      <Navbar />
      {/* <hr className="" /> */}
      <div className="grid grid-cols-1 md:grid-cols-2 md:mx-10 md:gap-x-16 md:mt-10">
        <Carousel
          images={[
            "images/image-product-1.jpg",
            "images/image-product-2.jpg",
            "images/image-product-3.jpg",
            "images/image-product-4.jpg",
          ]}
        />
        <ItemDescription />
      </div>
    </main>
  );
}

export default App;
